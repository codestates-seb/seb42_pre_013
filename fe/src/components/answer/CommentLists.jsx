import React from "react";
import styled from "styled-components";
import trash from "../../assets/img/icons8-delete-trash-100.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CommentLists({ answers, answerLists, setAnswerLists }) {
  const navigate = useNavigate();
  const { ids } = useParams();

  // const handleDeleteAnswers = () => {
  //   //! Comment DELETE correcting,,,,,,,,,,,,,,,
  //   // put
  //   // setAnswerLists((answerLists) => answerLists.filter((el) => el.id !== id));
  //   axios
  //     .patch(`http://localhost:4000/ask/${ids}`)
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       alert("Delete Error");
  //       console.log(err);
  //     });

  //   navigate(`/answer/${ids}`);
  //   window.location.reload();
  // };

  return (
    <Wrapper>
      <AnswersWrapper>{answers}</AnswersWrapper>
      <DeleteBtn>
        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <button>
            <img src={trash} alt="trash" onClick={handleDeleteAnswers} />
          </button>
        </form> */}
      </DeleteBtn>
    </Wrapper>
  );
}

export default CommentLists;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  width: 500px;
  /* height: auto; */
`;

const AnswersWrapper = styled.div`
  margin: 15px;
`;

const DeleteBtn = styled.div`
  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  button {
    background-color: #ffffff;

    :hover {
      background-color: #ffffff;
    }
  }
`;
