import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import top from "../../assets/img/icons8-sort-up-50.png";
import down from "../../assets/img/icons8-sort-down-50.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MainTabsUnder() {
  // answer 작성 값
  const [answerValue, setAnswerValue] = useState("");
  // answer 작성 값 id > 1부터 시작
  const answerId = useRef(1);

  const navigate = useNavigate();

  // answer 작성 값 answerValue 저장
  const handleAnswerValue = (e) => {
    setAnswerValue(e.target.value);

    console.log(answerValue);
  };

  // 수정 값
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(answerValue); // 새로운 아이템 내용 넣을 값

  //! answerValue 구조할당분해 ->
  const { id, content } = answerValue;

  // 수정 값 받아오기
  const EditInput = (e) => {
    setNewText(e.target.value);
    console.log(newText);
  };

  // Edit 버튼 클릭시 수정 모드
  const onClickEditButton = () => {
    setEdited(true);
  };


  // //! 답변 작성 받아오기 GET
  // const fetchData = async () => {
  //   await axios
  //     .get(``)
  //     .then((res) => {
  //       console.log(res);
  //       setAnswerValue(res.data.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // // 페이지 오거나, 어짜피 작성하면 answer 페이지로 오기때문에 리로딩 > get 갱신
  // useEffect(() => {
  //   fetchData();
  // }, []);

  //! answer 작성한 것 서버에 전송 POST
  const submitAnswerHandler = (e) => {
    if (!answerValue) {
      e.preventDefault();
      alert("empty value.. Write your answer!");
    } else {
      let data = JSON.stringify({
        //! 키 값은 api 명세서에 따라 변경
        id: answerId.current,
        content: answerValue,
      });
      const header = {
        headers: {
          "Content-Type": `application/json`,
        },
      };

      axios
        .post("", data, header)
        .then((data) => {
          setAnswerValue(answerValue.concat(data));
          answerId.current += 1;
        })
        .catch((err) => {
          alert("Upload Error");
          console.log(err);
        });

      navigate("/answer");
      window.location.reload();
    }
  };

  //! 삭제 DELETE -> 해보고 안되면 useCallback((id) => {}, [answerValue])
  const removeContentsHandler = (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      //! 키 값은 api 명세서에 따라 변경
      id: answerId.current,
      content: answerValue,
    });
    const header = {
      headers: {
        "Content-Type": `application/json`,
      },
    };

    axios
      .delete("", data, header)
      .then((data) => {
        setAnswerValue(answerValue.filter((el) => el.id !== id));
      })
      .catch((err) => {
        alert("Upload Error");
        console.log(err);
      });

    navigate("/answer");
    window.location.reload();
  };

  //! 수정 PATCH
  const EditContentsHandler = (e) => {
    // e.preventDefault();

    if (!newText) {
      alert("empty value.. Write your answer!");
    } else {
      let data = JSON.stringify({
        // 현재 id 와 변경된 값을 POST
        //! 키 값은 api 명세서에 따라 변경
        id: answerId.current,
        content: newText,
      });
      const header = {
        headers: {
          "Content-Type": `application/json`,
        },
      };

      axios
        .post("", data, header)
        .then((data) => {
          setAnswerValue(answerValue.concat(data));
          const nextAnswerValue = answerValue.map((el) => ({
            ...el, // 이전 값

            // 새로운 아이템 내용을 넣어줌
            content: el.id === id ? newText : el.content,
          }));

          // console.log(nextAnswerValue);

          setAnswerValue(nextAnswerValue); // 새로운 리스트를 넣어줌

          // console.log(answerValue)
        })
        .catch((err) => {
          alert("Upload Error");
          console.log(err);
        });

      setEdited(false); // 수정모드를 다시 읽기모드로 변경

      // `answer/${id}` 수정
      navigate("/answer");
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
        <p>작성글 받아오기</p>
        <div>{content}</div>
        {/* 코멘트 리스트 컴포넌트*/}
        <AnswerList>
          <p>Comment</p>
          <div>
            <AnswerValue>
              <p>answer 값을 받아올 칸</p>
              <div>
                <p>받아올 comment 내용</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  {!edited ? (
                    <button onClick={() => onClickEditButton()}>Edit</button>
                  ) : (
                    <button onClick={() => EditContentsHandler()}>
                      Confirm
                    </button>
                  )}

                  <button onClick={() => removeContentsHandler()}>
                    Delete
                  </button>
                </form>
                {edited ? (
                  <textarea onChange={EditInput} ref={editInputRef} />
                ) : null}
              </div>
              {/* {answerValue.map(() => {
          })} */}
            </AnswerValue>
          </div>
        </AnswerList>
        {/* 답변 작성 컴포넌트 */}
        <YourAnswer>
          <p>Your Answer</p>
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
