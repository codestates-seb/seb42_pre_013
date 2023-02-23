import React from "react";
import styled from "styled-components";
import pencil from "../../assets/img/icons8-edit-48.png";
import chat from "../../assets/img/icons8-chat-room-50.png";
import stackOver from "../../assets/img/icons8-stack-overflow-is-a-question-and-answer-site-for-professional-48.png";

function RightSideTabs() {
  return (
    <RightWrapper>
      <YellowExplain>
        {/* first box */}
        <Title>The Overflow Blog</Title>

        <Element>
          <img src={pencil} alt="pencil" />
          <p>
            Because the only thing worse than
            <br />
            building internal tools is maintaining
            <br />
            them...
          </p>
        </Element>

        {/* second box */}
        <Title>Featured on Meta</Title>
        <Element>
          <img src={chat} alt="pencil" />
          <p>
            Ticket smash for [status-review] tag:
            <br />
            Part Deux
          </p>
        </Element>

        <Element>
          <img src={chat} alt="pencil" />
          <p>
            We've added a "Necessary cookies
            <br /> only" option to the cookie consent
            <br />
            popup
          </p>
        </Element>
        <Element>
          <img src={stackOver} alt="pencil" />
          <p>
            We’ve made changes to our Privacy
            <br />
            Notice for Collectives™
          </p>
        </Element>
        <Element>
          <img src={stackOver} alt="pencil" />
          <p>The [amazon] tag is being burninated</p>
        </Element>
        <Element>
          <img src={stackOver} alt="pencil" />
          <p>Temporary policy: ChatGPT is banned</p>
        </Element>
        <Element>
          <img src={stackOver} alt="pencil" />
          <p>
            Microsoft Azure Collective launch and
            <br /> proposed tag changes
          </p>
        </Element>
      </YellowExplain>
    </RightWrapper>
  );
}

export default RightSideTabs;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdf8e3;
  margin-right: 2rem;
  border-radius: 4px;
  border: 2px solid #e2e2d9;
  margin-top: 1.8rem;
  width: 300px;
`;

const YellowExplain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdf7e2;
  font-size: 0.7rem;
  padding: 13px;

  img {
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 5px;
    display: inline-block;
  }

  div {
  }
`;

const Element = styled.div`
  display: flex;
  margin-bottom: 0.4rem;
`;

const Title = styled.div`
  background-color: #fbf3c5;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 5px;
  margin-bottom: 0.7rem;
`;
