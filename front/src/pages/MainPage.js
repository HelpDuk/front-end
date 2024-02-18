import React, { useState, useEffect } from 'react';
import "./MainPage.css";
import logImage from '../assets/image/mainimg.png';
import {Link, useLocation} from "react-router-dom"

function MainPage() {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 경로가 변경될 때마다 실행될 함수
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    if (accessToken) {
        setIsLogin(true);
    } else {
        setIsLogin(false);
    }
}, [location, setIsLogin]);

  
  return (
    <div className="mainPage">
      <img className="mainImg" alt="mainImg" src={logImage} />
      <div className="textContent">
        <h1>도움이 필요할 때면 언제든!</h1>
        <h1>안전한 환경!</h1>
        <h1>교내에서 빠르게 얻게 되는 도움!</h1>
      </div>
      {isLogin ? (
        <div className="loginLink">
        <Link to="./homepage">
          <strong className='custom'>의뢰글 보러가기!</strong>
        </Link>      
        </div>
      ): (
        <div className="loginLink">
        <Link to="./login">
          <strong className='custom'>로그인하러 가기!</strong>
        </Link>      
        </div>
      )}

    </div>
  );
};

export default MainPage;
