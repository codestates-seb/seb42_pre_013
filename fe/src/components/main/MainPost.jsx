import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function MainPost({ post, mainContentsValue }) {
  // console.log(mainContentsValue)
  // const {title, keyword, user} = mainContentsValue
  return (
    <Wrapper>
      <LeftWrapper>
        <p>votes</p>
        <p>answers</p>
        <p>views</p>
      </LeftWrapper>
      <RightWrapper>
        {/* mainContentsValue 로 수정하기 */}
        {/* <Link to="/answer/:mainContentsValue.id" /> */}

        <Link to="/answer" style={{ textDecoration: "none" }}>
          <Title>{post.title}</Title>
        </Link>

        <Keyword>{post.keyword}</Keyword>
        <User>{post.user}</User>
      </RightWrapper>
    </Wrapper>
  );
}

export default MainPost;

const Wrapper = styled.div`
  padding: 10px;
  border-top: 1px solid gainsboro;
  display: flex;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 0.5rem;
  margin-left: 1rem;
  font-size: 0.7rem;
`;
const RightWrapper = styled.div`
  width: 90%;
`;

const User = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.6rem;
  color: #0070d3;

  :hover {
    color: #37a0ff;
  }
`;

const Title = styled.div`
  font-size: 0.9rem;
  color: #1266aa;

  :hover {
    color: #37a0ff;
    cursor: pointer;
  }
`;

const Keyword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 1.7rem;
  height: 1rem;
  font-size: 0.7rem;
  background-color: #d0e3f1;
  color: #2d5877;
  margin-top: 0.3rem;
`;
