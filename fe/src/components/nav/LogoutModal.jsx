import React from "react";
import styled from "styled-components";
import stackOverflow from "../../assets/img/stackOverFlowIcon.png";
import { Link } from "react-router-dom";

function LogoutModal({ handleButtonClick }) {
  return (
    <>
      <ModalForm>
        <div>
          <h3>
            <a>current community</a>
          </h3>
          <div>
            <button
              onClick={() => {
                handleButtonClick();
              }}
            >
              X
            </button>
          </div>
        </div>
        <div>
          <div>
            <a>
              <img src={stackOverflow} />
              <span>Stack Overflow</span>
            </a>
          </div>
          <div>
            <Link to="/logout">log out</Link>
          </div>
        </div>
      </ModalForm>
    </>
  );
}

export default LogoutModal;

const ModalForm = styled.div`
  top: 47px;
  right: 40px;
  max-width: 363px;
  width: 100%;
  min-height: 68px;
  box-sizing: border-box;
  border: 1px solid #e3e6e8;
  color: #3b4045;
  font-size: 12px;
  background-color: #ffffff;
  z-index: 999;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05);
  position: relative;
  a {
    color: #0074cc;
    text-decoration: none;
    cursor: pointer;
  }
  & > div {
    &:first-child {
      background-color: #f1f2f3;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 10px;
      flex-wrap: wrap;
      & > div {
        &:last-child {
          flex: 1 auto;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        button {
          display: block;
          padding: 0;
          margin-left: 8px;
          border: none;
          background-color: transparent;
          color: #525960;
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
    h3 {
      color: #525960;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 11px;
    }
    &:last-child {
      padding: 2px 7px 2px 7px;
      display: flex;
      & > div {
        padding: 8px;
        padding-left: 0px;
        &:first-child {
          flex: 1 auto;
          img {
            width: 16px;
            height: 16px;
            vertical-align: top;
            flex: none;
            margin: 0px 4px;
          }
          span {
            margin: 0px 4px;
            flex: 1 auto;
            user-select: text;
            font-weight: bold;
          }
        }
      }
    }
  }
`;
