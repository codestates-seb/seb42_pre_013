import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import top from "../../assets/img/icons8-sort-up-50.png";
import down from "../../assets/img/icons8-sort-down-50.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CommentLists from "./CommentLists";
import { useCookies } from "react-cookie";

function MainTabsUnder({ mainContentsValue }) {
  // answer 작성 값
  const [contentsValue, setContentsValue] = useState([]);
  // answer 작성 값 id > 1부터 시작

  const answerId = Math.random().toString(36);
  const navigate = useNavigate();

  const { ids } = useParams();

  // answer 작성 값 contentsValue 저장
  const handleAnswerValue = (e) => {
    setContentsValue(e.target.value);

    console.log(contentsValue);
  };

  // 수정 값
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(contentsValue); // 새로운 아이템 내용 넣을 값

  //! contentsValue 구조할당분해 ->
  const { id, content } = contentsValue;

  // 쿠키 받아오기
  const [cookies, setCookie, removeCookie] = useCookies();

  // 수정 값 받아오기
  const EditInput = (e) => {
    setNewText(e.target.value);
    console.log(newText);
  };

  // Edit 버튼 클릭시 수정 모드
  const onClickEditButton = () => {
    setEdited(true);
  };

  // ask 의 contents 받아와서 저장하기
  const [askContents, setAskContents] = useState("");
  //! ask -> 답변 작성 받아오기 GET
  const fetchData = async () => {
    const header = {
      headers: {
        Authorization: `Bearer ${cookies["accessToken"]}`,
      },
    };

    await axios
      .get(`http://localhost:8000/ask/${ids}`, header)
      .then((res) => {
        setAskContents(res.data.contents);
      })
      .catch((error) => console.log(error));
  };

  // 페이지 오거나, 어짜피 작성하면 answer 페이지로 오기때문에 리로딩 > get 갱신
  useEffect(() => {
    fetchData();
  }, []);

  //! ask/contents 수정 PATCH
  const EditContentsHandler = (e) => {
    // e.preventDefault();

    if (!newText) {
      alert("empty value.. Write your answer!");
    } else {
      let data = JSON.stringify({
        // 현재 id 와 변경된 값을 POST
        //! 키 값은 api 명세서에 따라 변경
        contents: newText,
      });
      const header = {
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${cookies["accessToken"]}`,
        },
      };

      axios
        .patch(`http://localhost:8000/ask/${ids}`, data, header)
        .then((data) => {
          setContentsValue(contentsValue.concat(data));
        })
        .catch((err) => {
          alert("Upload Error");
          console.log(err);
        });

      setEdited(false); // 수정모드를 다시 읽기모드로 변경

      // `answer/${id}` 수정
      navigate(`/answer/${ids}`);
      window.location.reload();
    }
  };

  //! edited 모드일 때 포커싱
  const editInputRef = useRef(null);

  useEffect(() => {
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  //TODO answer
  // //! answer GET
  // ask 의 contents 받아와서 저장하기
  const [answerLists, setAnswerLists] = useState([]);
  //! ask -> 답변 작성 받아오기 GET
  const fetchDataAnswer = () => {
    const header = {
      headers: {
        Authorization: `Bearer ${cookies["accessToken"]}`,
      },
    };

    axios
      .get(`http://localhost:8000/ask/${ids}`, header)
      .then((res) => {
        // console.log(res.data.answer);
        setAnswerLists(res.data.answer);
      })
      .catch((error) => console.log(error));
  };

  // 페이지 오거나, 어짜피 작성하면 answer 페이지로 오기때문에 리로딩 > get 갱신
  useEffect(() => {
    fetchDataAnswer();
  }, []);

  //! answer 작성한 것 서버에 전송 Patch
  // const answerId = mainContentsValue.answers.length++;
  const [idValue, setIdValue] = useState(answerId);

  const submitAnswerHandler = (e) => {
    if (!contentsValue) {
      e.preventDefault();
      alert("empty value.. Write your answer!");
    } else {
      e.preventDefault();

      let data = JSON.stringify({
        answer: [
          ...answerLists,
          {
            id: crypto.randomUUID(),
            answers: contentsValue,
          },
        ],
      });

      const header = {
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${cookies["accessToken"]}`,
        },
      };

      axios
        .patch(encodeURI(`http://localhost:8000/ask/${ids}`), data, header)
        .then((data) => {
          setIdValue(idValue.concat(data));
          setContentsValue(contentsValue.concat(data));
        })
        .catch((err) => {
          alert("Upload Error");
          console.log(err);
        });

      navigate(`/answer/${ids}`);
      window.location.reload();
    }
  };

  return (
    <Wrapper>
      <SideTopDownBtn>
        <form onSubmit={(e) => e.preventDefault()}>
          <button>
            <img src={top} alt="top" />
          </button>
          <p>0</p>
          <button>
            <img src={down} alt="top" />
          </button>
        </form>
      </SideTopDownBtn>
      <WriteWrapper>
        {/* 작성글 받아오는 컴포넌트 */}
        {/* page/Answer 에서 get 받아서 state 파라미터 전달 || 현 페이지에서 id 값 get 받아서 state 뿌리기  */}
        <div style={{ marginBottom: "40px" }}>{askContents}</div>

        {/* 코멘트 리스트 컴포넌트*/}
        <AnswerList>
          <div>
            <AnswerValue>
              <AskContents>
                <form onSubmit={(e) => e.preventDefault()}>
                  {!edited ? (
                    <button onClick={() => onClickEditButton()}>
                      Contents Edit
                    </button>
                  ) : (
                    <button onClick={() => EditContentsHandler()}>
                      Confirm
                    </button>
                  )}

                  {/* <button onClick={() => removeContentsHandler()}>
                    Delete
                  </button> */}
                </form>
                {edited ? (
                  <>
                    {/* <div>Title</div>
                    <textarea /> */}
                    <div>Contents</div>
                    <textarea
                      onChange={EditInput}
                      ref={editInputRef}
                      placeholder={askContents}
                    />
                  </>
                ) : null}
              </AskContents>
            </AnswerValue>
          </div>
        </AnswerList>
        {/* 답변 작성 컴포넌트 */}
        <YourAnswer>
          <p style={{ margin: "20px 0 20px 0" }}>Comment</p>
          <div>
            {answerLists.map((el) => {
              return (
                <CommentLists
                  key={el.id}
                  answers={el.answers}
                  answerLists={answerLists}
                  setAnswerLists={setAnswerLists}
                />
              );
            })}
          </div>

          <p style={{ margin: "30px 0 10px 0" }}>Your Answer</p>
          <form>
            <textarea onChange={handleAnswerValue}></textarea>
            <button type="submit" onClick={submitAnswerHandler}>
              Post Your Answer
            </button>
          </form>
        </YourAnswer>
      </WriteWrapper>
    </Wrapper>
  );
}

export default MainTabsUnder;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin-left: 1rem;
`;

const SideTopDownBtn = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
  flex: 1;

  img {
    width: 15px;
    height: 15px;
  }

  button {
    border: none;
  }

  p {
    margin-left: 8px;
  }
`;

const WriteWrapper = styled.div`
  flex: 9;

  input {
    width: 100%;
    height: 400px;
  }
`;

const AnswerList = styled.div``;

const AnswerValue = styled.div`
  button {
    border: none;
    margin-right: 0.2rem;
    background-color: #ffffff;
    color: #f48225;
    cursor: pointer;

    :hover {
      background-color: #e3e6e8;
    }

    :last-child {
      color: #fc3807;
      :hover {
        background-color: #e3e6e8;
      }
    }
  }

  textarea {
    display: block;
    width: 500px;
    height: 300px;
    resize: none;
  }
`;

// 답변 파트
const YourAnswer = styled.div`
  /* display: flex;
  flex-direction: column; */

  input {
    display: block;
    width: 500px;
    height: 100px;
  }

  textarea {
    display: block;
    width: 500px;
    height: 300px;
    resize: none;
  }

  button {
    width: 8rem;
    height: 2.3rem;
    border-radius: 5px;
    border: 1px solid #85aecc;
    margin-top: 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
    background-color: #0a94ff;
    color: #ffffff;
    border: none;

    :hover {
      background-color: #2274cc;
    }
  }
`;

const AskContents = styled.div`
  font-size: 20px;
`;
