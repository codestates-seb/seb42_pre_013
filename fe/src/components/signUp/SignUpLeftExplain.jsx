import React from "react";
import logo_question from "../../assets/svg/icon_question.svg";
import logo_topDown from "../../assets/svg/icon_topdown.svg";
import logo_tag from "../../assets/svg/icon_tag.svg";
import logo_trophy from "../../assets/svg/icon_trophy.svg";
import styled from "styled-components";

function SignUpLeftExplain() {
  return (
    <Wrapper>
      <p>Join the Stack Overflow community</p>
      <div>
        <img src={logo_question} alt="question" />
        <span>Get unstuck — ask a question</span>
      </div>
      <div>
        <img src={logo_topDown} alt="question" />
        <span>Unlock new privileges like voting and commenting</span>
      </div>
      <div>
        <img src={logo_tag} alt="question" />
        <span>Save your favorite tags, filters, and jobs</span>
      </div>
      <div>
        <img src={logo_trophy} alt="question" />
        <span>Earn reputation and badges</span>
      </div>

      <p>
        Collaborate and share knowledge with a private group for FREE. <br />
        <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
          Get Stack Overflow for Teams free for up to 50 users.
        </a>
      </p>
    </Wrapper>
  );
}

export default SignUpLeftExplain;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5rem;
  > p:first-child {
    font-size: 25px;
    font-weight: 450;
    margin-bottom: 2rem;
  }

  > p:last-child {
    font-size: 13px;
    margin-top: 1rem;
    a {
      text-decoration: none;
      color: #0a75e2;
      :hover {
        color: #0a95ff;
      }
    }
  }

  div {
    margin: 10px 0;

    img {
      margin-right: 6px;
    }

    span {
      position: relative;
      bottom: 8px;
    }
  }
`;
