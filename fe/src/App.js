import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Ask from "./pages/Ask";
import Answer from "./pages/Answer";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  // title , contents 저장 값
  const [mainContentsValue, setMainContentsValue] = useState([]);

  // 작성글 ID
  // const contentsId = useRef(1);

  // navigate 받기
  // const navigate = useNavigate();

  //! 제목, 타이틀 받아오기 GET
  //         "Content-Type": `application/json`,
  const fetchData = async () => {
    const header = {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    };

    await axios
      .get(`http://localhost:4000/ask`, header)
      .then((res) => {
        setMainContentsValue(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  // 페이지 접속 시 로딩 && 게시글 작성시 <Link to> 로  > get 갱신
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/main"
          element={<Main mainContentsValue={mainContentsValue} />}
        />
        <Route
          path="/ask"
          element={<Ask mainContentsValue={mainContentsValue} />}
        />
        <Route
          path="/answer"
          element={
            <Answer
              mainContentsValue={mainContentsValue}
              setMainContentsValue={setMainContentsValue}
            />
          }
        />
        <Route
          path="/answer/:ids"
          element={<Answer mainContentsValue={mainContentsValue} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
