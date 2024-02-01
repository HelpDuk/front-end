import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Mypage from "./pages/myPage/Mypage"; 
import ProfileEdit from "./pages/myPage/ProfileEdit";
import MyRequests from "./pages/myPage/MyRequests";
import HelpedRequests from "./pages/myPage/HelpedRequests";
import HelperList from "./pages/myPage/HelperList";
import ReviewList from "./pages/myPage/ReviewList";
import WriteReview from "./pages/myPage/WriteReview";
import HomePage from "./pages/homePage/HomePage";
import ChatPage from "./pages/chatPage/ChatPage";
import DetailPage from "./pages/detailPage/DetailPage"
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage"
import Alert from "./pages/AlertPage"
import RequestForm from "./pages/RequestFormPage"
import { UserProvider } from './components/UserContext';
import SampleImg from "./assets/homePage/sample.png";
import { useState } from "react"

/*목 데이터*/
const mockRequest = [
  {
      taskId: 0,
      title: "프린트 해주실 분",
      isSolved: false,
      detail: "차관에서 만나요",
      taskStatus: "거래 완료",
      category: "프린트",
      uploadDate: "2024-01-30 15:28:41",
      price: 3000,
      imageUrl: {SampleImg},
  },
  {
      taskId: 1,
      title: "커피 사다주실 분",
      isSolved: false,
      detail: "도서관에서 만나요",
      taskStatus: "거래 전",
      category: "음식",
      uploadDate: "2024-01-30 15:28:41",
      requestFee: 2000,
      imageUrl: {SampleImgGd},
  },
  {
      taskId: 3,
      title: "같이 밥 먹으실 분",
      isSolved: false,
      detail: "학관에서 만나요",
      taskStatus: "거래 완료",
      category: "학교 안",
      uploadDate: "2024-01-30 15:28:41",
      requestFee: 1000,
      imageUrl: {SampleImg},
  }
]


function App() {
  const [request, setRequest] = useState(mockRequest);

  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <div className="main">
            <Routes>
              <Route path={"/homepage"} element={<HomePage mockRequest={mockRequest}/>} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/signup"} element={<Signup />} />
              <Route path={"/alert"} element={<Alert />} />
              <Route path={"/mypage"} element={<Mypage />} />
              <Route path={"/requestForm"} element={<RequestForm />} />
              <Route path={"/detailPage"} element={<DetailPage mockRequest={mockRequest}/>} />
              <Route path={"/mypage/profileEdit"} element={<ProfileEdit />} />
              <Route path={"/mypage/myRequests"} element={<MyRequests />} />
              <Route path={"/mypage/helpedRequests"} element={<HelpedRequests />} />
              <Route path={"/mypage/helperList"} element={<HelperList />} />
              <Route path={"/mypage/reviewList"} element={<ReviewList />} />
              <Route path={"/writeReview"} element={<WriteReview />} />
              <Route path={"/chatpage"} element={<ChatPage />} />
            </Routes>
          </div>
          <Footer />   
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
