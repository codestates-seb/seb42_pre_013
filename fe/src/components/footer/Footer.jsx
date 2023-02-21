import React from "react";
import styled from "styled-components";
import stackOverFlow from "../../assets/img/stackOverFlowIcon.png";

function Footer() {
  return (
    <Wrapper>
      <img src={stackOverFlow} alt="stackOverFlowLogo" />
      <List>
        <div>STACK OVERFLOW</div>
        <p>Questions</p>
        <p>help</p>
      </List>

      <List>
        <div>PRODUCTS</div>
        <p>Teams</p>
        <p>Advertising</p>
        <p>Collectives</p>
        <p>Talent</p>
      </List>

      <List>
        <div>COMPANY</div>
        <p>About</p>
        <p>Press</p>
        <p>Work Here</p>
        <p>Legal</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Contact Us</p>
        <p>Cookie Settings</p>
        <p>Cookie Policy</p>
      </List>

      <List>
        <div>STACK OVERFLOW</div>
        <p>Questions</p>
        <p>help</p>
      </List>

      <RightList>
        <div>
          <span>Blog</span>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Linkedin</span>
          <span>Instagram</span>
        </div>
        <div>
          Site design / logo © 2023 Stack Exchange Inc; user
          <br />
          contributions licensed under CC BY-SA. <br />
          rev 2023.2.17.43248
        </div>
      </RightList>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  background-color: #24262a;
  height: 17rem;
  width: 100%;
  color: #BABFC4;
  display: flex;
  justify-content: space-around;
  font-size: 9px;

  img {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    margin-left: 30px;
    position: relative;
    left: 25px;
    top: 5px;
  }
`;

const List = styled.div`

  padding-top: 32px;
  div {
    margin-bottom: 1rem;
    font-weight: 800;
    
  }
  p {
    margin-bottom: 0.3rem;
  }
`;

const RightList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;
  font-size: 9px;

  span {
    margin-right: 7px;
  }
`;
