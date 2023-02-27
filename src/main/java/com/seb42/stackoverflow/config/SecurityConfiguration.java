package com.seb42.stackoverflow.config;

import com.seb42.stackoverflow.auth.filter.JwtAuthenticationFilter;
import com.seb42.stackoverflow.auth.filter.JwtVerificationFilter;
import com.seb42.stackoverflow.auth.handler.UserAccessDeniedHandler;
import com.seb42.stackoverflow.auth.handler.UserAuthenticationEntryPoint;
import com.seb42.stackoverflow.auth.handler.UserAuthenticationFailureHandler;
import com.seb42.stackoverflow.auth.handler.UserAuthenticationSuccessHandler;
import com.seb42.stackoverflow.auth.jwt.JwtTokenizer;
import com.seb42.stackoverflow.auth.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(Customizer.withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                .accessDeniedHandler(new UserAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/*/users/signup").permitAll()
                        .antMatchers(HttpMethod.PATCH, "/*/users/edit/**").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/*/users/delete/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET,"/*/users/**").hasAnyRole("ADMIN","USER")
                        .antMatchers(HttpMethod.POST,"/*/stackoverflow/board").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH,"/*/stackoverflow/board/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET,"/*/stackoverflow/board/**").hasAnyRole("ADMIN","USER")
                        .antMatchers(HttpMethod.GET,"/*/stackoverflow/board").hasAnyRole("ADMIN","USER")
                        .antMatchers(HttpMethod.DELETE,"/*/stackoverflow/board/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST,"/*/api/posts/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET,"/*/api/posts/**").hasAnyRole("ADMIN","USER")
                        .antMatchers(HttpMethod.PUT,"/*/api/posts/**").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE,"/*/api/posts/**").hasRole("USER")
                        .anyRequest().permitAll()
                );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);
            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
