import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import AskNav from "../components/nav/AskNav";
import pencil from "../assets/img/pencil.png";
import Footer from "../components/footer/Footer";
import BlueBoxContents from "../components/ask/BlueBoxContents";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Ask({ mainContentsValue }) {
  // title , contents 값
  const [titleValue, setTitleValue] = useState("");
  const [contentsValue, setContentsValue] = useState("");
  // title 값 받아오기
  const TitleValue = (e) => {
    setTitleValue(e.target.value);
    console.log(titleValue);
  };
  // contents 값 받아오기
  const ContentsValue = (e) => {
    setContentsValue(e.target.value);
    console.log(contentsValue);
  };

  // id 구조할당분해
  //   const {id} = mainContentsValue

  // 작성글 ID
  const contentsId = useRef(4);

  // navigate 받기
  const navigate = useNavigate();

  //! answer 작성한 것 서버에 전송 POST
  const submitContentsHandler = (e) => {
    if (!titleValue || !contentsValue) {
      //   e.preventDefault();
      alert("empty value.. Write your answer!");
    } else {
      //   e.preventDefault();

      let data = JSON.stringify({
        //! 키 값은 api 명세서에 따라 변경
        id: contentsId.current,
        title: titleValue,
        contents: contentsValue,
      });

      const header = {
        headers: {
          "Content-Type": `application/json`,
        },
      };

      axios
        .post(`http://localhost:4000/ask`, data, header)
        .then((data) => {
          setTitleValue(titleValue.concat(data));
          setContentsValue(contentsValue.concat(data));
          contentsId.current += 1;
        })
        .catch((err) => {
          alert("Upload Error");
          console.log(err);
        });
      //! navigate(`/ask/${id}`); 변경하기
      navigate(`/main`);
      //   window.location.reload();
    }
  };

  return (
    <>
      <AskNav />
      <Container>
        <Content>
          {/* form 여기  */}
          <QuestionForm onSubmit={submitContentsHandler}>
            <section>
              <div>
                <h1>Ask a public question</h1>
              </div>
              <BlueBox>
                <BlueBoxContents />
              </BlueBox>
            </section>
            <Section>
              {/* 제목 작성하기 */}
              <TitleBox>
                <div>
                  <div>
                    <div>
                      <label htmlFor="title">Title</label>
                      <p>
                        Be specific and imagine you're asking a question to
                        another person.
                      </p>
                    </div>
                  </div>
                  <div>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      maxLength="300"
                      placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                      onChange={TitleValue}
                    />
                  </div>
                </div>
                <div></div>
              </TitleBox>
              <Guide>
                <GuideTitle>Writing a good title</GuideTitle>
                <GuideContent>
                  <div>
                    <img src={pencil} alt="pencil" />
                  </div>
                  <div>
                    <p>Your title should summarize the problem.</p>
                    <p>
                      You might find that you have a better idea of your title
                      after writing out the rest of the question.
                    </p>
                  </div>
                </GuideContent>
              </Guide>
            </Section>
            <Section>
              {/* 질문 내용 작성하기 */}
              <TitleBox>
                <div>
                  <div>
                    <div>
                      <label>What are the details of your problem?</label>
                      <p>
                        Introduce the problem and expand on what you put in the
                        title. Minimum 20 characters.
                      </p>
                    </div>
                  </div>
                  <div>
                    <ContentInput onChange={ContentsValue} />
                  </div>
                </div>
                <div>
                  <NextButton type="submit">Submit</NextButton>
                </div>
              </TitleBox>
              <Guide>
                <GuideTitle>Introduce the problem</GuideTitle>
                <GuideContent>
                  <div>
                    <img src={pencil} alt="pencil" />
                  </div>
                  <div>
                    <p>
                      Explain how you encountered the problem you’re trying to
                      solve, and any difficulties that have prevented you from
                      solving it yourself.
                    </p>
                  </div>
                </GuideContent>
              </Guide>
            </Section>
          </QuestionForm>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default Ask;

const Container = styled.div`
  margin-top: 0.2rem;
  max-width: 100%;
  height: 100vh;
  background-color: #f8f9f9;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1264px;
  background-color: transparent;
  min-height: 750px;
  padding: 0px 16px 24px 16px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const QuestionForm = styled.form`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 48px;
  h1 {
    color: #232629;
    font-size: 22px;
    font-weight: 600;
    padding: 24px 0px 34px 0px;
  }
  section {
    max-width: 851.19px;
  }
`;

const BlueBox = styled.div`
  min-height: 249.52px;
  margin: 16px 0;
  padding: 24px;
  border: 1px solid #379fef;
  border-radius: 3px;
  background-color: #ebf4fb;
  color: #3b4045;
  h2 {
    font-size: 19.8px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  p {
    font-size: 14.3px;
    a {
      text-decoration-line: none;
      color: #0074cc;
    }
  }
  h5 {
    margin-top: 13px;
    margin-bottom: 8px;
    font-size: 100%;
  }
  li {
    font-size: 13px;
  }
`;

const Section = styled.section`
  @media screen and (max-width: 1100px) {
    flex-direction: column-reverse;
  }
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
  & > div {
    width: 100%;
    max-width: 851.19px;
  }
`;

const TitleBox = styled.div`
  background-color: #ffffff;
  padding: 24px;
  flex-shrink: 0;
  border: 1px solid #e3e6e8;
  border-radius: 3px;
  & > div {
    display: flex;
    flex-direction: column;
    margin: -2px 0;
    & > div {
      margin: 2px 2px 6px 2px;
      display: flex;
      flex-direction: column;
      label {
        cursor: pointer;
        font-size: 13px;
        color: #0c0d0e;
        font-weight: 600;
        padding: 0 2px;
      }
      p {
        font-size: 12px;
        color: #3b4045;
        margin: 2px 0;
        padding: 0 2px;
      }
    }
    input {
      width: 100%;
      padding: 0.6em 0.7em;
      border: 1px solid #babfc4;
      border-radius: 3px;
    }
  }
`;

const NextButton = styled.button`
  width: 60px;
  height: 37.78px;
  color: #ffffff;
  margin-top: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #0a95ff;
  &:active {
    background-color: #0063bf;
    box-shadow: 0px 0px 0px 2px rgba(0, 84, 163, 0.4);
  }
  &:hover {
    background-color: #0074cc;
  }
`;

const ContentInput = styled.textarea`
  height: 256.66px;
`;

const Guide = styled.div`
  @media screen and (max-width: 1100px) {
    position: relative;
  }
  min-width: 348.81px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05);
`;

const GuideTitle = styled.div`
  @media screen and (max-width: 640px) {
    font-size: 14.3px;
  }
  font-size: 15px;
  padding: 12px;
  background-color: #f8f9f9;
  border-bottom: 1px solid #d6d9dc;
`;

const GuideContent = styled.div`
  display: flex;
  margin: 16px;
  background-color: #ffffff;
  & > div {
    margin: 0 8px;
    font-size: 12px;
  }
  img {
    width: 48px;
    height: 48px;
  }
  p {
    clear: both;
    &:first-child {
      margin-bottom: 12px;
      color: #232629;
    }
  }
`;

const PostButton = styled.button`
  width: 130.47px;
  height: 37.78px;
  color: #ffffff;
  margin-top: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #0a95ff;
  &:active {
    background-color: #0063bf;
    box-shadow: 0px 0px 0px 2px rgba(0, 84, 163, 0.4);
  }
  &:hover {
    background-color: #0074cc;
  }
`;
