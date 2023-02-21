import React from "react";
import styled from "styled-components";
import LogoutNav from '../components/nav/LogoutNav';

function Question() {
  return (
    <>
        <LogoutNav />
        <Container>
            <Content>
                <QuestionForm>
                    <div>
                        <div>
                            <h1>Ask a public question</h1>
                        </div>
                        <BlueBox>
                            <h2>Writing a good question</h2>
                            <p>
                                You're ready to
                                <a href="https://stackoverflow.com/help/how-to-ask"> ask </a>
                                a 
                                <a href="https://stackoverflow.com/help/on-topic"> programming-related question </a>
                                and this form will help guide you through the process.
                            </p>
                            <p>
                                Looking to ask a non-programming question? See 
                                <a href="https://stackexchange.com/sites#technology-traffic"> the topics here </a>
                                to find a relevant site.
                            </p>
                            <h5>Steps</h5>
                            <ul>
                                <li>Summarize your problem in a one-line title.</li>
                                <li>Describe your problem in more detail.</li>
                                <li>Describe what you tried and what you expected to happen.</li>
                                <li>Add “tags” which help surface your question to members of the community.</li>
                                <li>Review your question and post it to the site.</li>
                            </ul>
                        </BlueBox>
                    </div>
                    <div>
                        <TitleBox>
                            <div>
                                <div>
                                    <div>
                                        <label>Title</label>
                                        <p>Be specific and imagine you're asking a question to another person.</p>
                                    </div>
                                </div>
                                <div>
                                    <input id="title" name="title" type="text" maxLength="300" placeholder="e.g. Is there an R function for finding the index of an element in a vector?" />
                                </div>
                            </div>
                            <div>
                                <button>Next</button>
                            </div>
                        </TitleBox>
                        <div>
                            <div>Writing a good title</div>
                            <div>
                                <div>연필 이미지</div>
                                <div>
                                    <p>Your title should summarize the problem.</p>
                                    <p>You might find that you have a better idea of your title after writing out the rest of the question.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>
                                What are the details of your problem?
                                <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                            </label>
                        </div>
                        <div>
                            <input type="textarea"/>
                        </div>
                    </div>
                </QuestionForm>
            </Content>
        </Container>
    </>
  )
}

export default Question;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f1f2f3;
`

const Content = styled.div`
    min-height: 750px;
    overflow: visible;
`

const QuestionForm = styled.form`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 48px;
    h1 {
        color: #232629;
        font-size: 2rem;
        font-weight: 600;
        padding: 24px 0px 34px 0px;
    }
    &>div {
        max-width: 851.19px;
    }
`

const BlueBox = styled.div`
    min-height: 249.52px;
    margin: 16px 0;
    padding: 24px;
    border: 1px solid #379fef;
    border-radius: 3px;
    background-color: #ebf4fb;
    color: #3b4045;
    h2 {
        font-size: 1.8rem;
        font-weight: 400;
        margin-bottom: 8px;
    }
    p {
        font-size: 1.3rem;
        a {
            text-decoration-line: none;
            color: #0074cc;
        }
    }
    h5 {
        margin-top: 1em;
        margin-bottom: 8px;
        font-size: 100%;
    }
`

const TitleBox = styled.div`
    width: 100%;
    background-color: #ffffff;
    padding: 24px;
    flex-shrink: 0;
    border: 1px solid #e3e6e8;
    border-radius: 3px;
    &>div {
        display: flex;
        flex-direction: column;
        margin: -2px 0;
        &>div {
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
        button {
            width: 49.52px;
            height: 37.78px;
            color: #ffffff;
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
        }
    }
`