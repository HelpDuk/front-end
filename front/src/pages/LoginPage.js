import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/LoginPage.css";
import cloud_black from "../assets/image/cloud_black.png";
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate를 사용하여 페이지 이동을 처리합니다.

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // axios를 사용하여 서버에 로그인 요청을 보냅니다.
    axios.post('http://localhost:3000/api/sign/sign-in', null,{ params:  {
      userEmail: email,
      password: password
  } })
      .then((response) => {
        // 서버로부터의 응답을 확인하여 로그인이 성공한 경우
        if (response.data.success) {
          localStorage.setItem('ACCESS_TOKEN', response.data.token);
          console.log(response.data)
          // 로그인이 성공했을 때만 홈페이지로 이동
          navigate('/homepage');
        } else {
          // 로그인이 실패한 경우 페이지 새로고침
          window.location.reload();
          alert('이메일 또는 비밀번호가 맞지 않습니다.');
        }
      })
      .catch((error) => {
        // 서버 요청이 실패한 경우
        console.error(error);
      });
  }

  return (
    <div className="login">
      <div className="image-container">
        <img src={cloud_black} alt="cloud_black" className="cloud-logo" />
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <input name="email" type="email" value={email} onChange={onEmailHandler} placeholder="user@duksung.ac.kr" />
        </div>
        <div>
          <input name="password" type="password" value={password} onChange={onPasswordHandler} placeholder="비밀번호" />
        </div>
        <div>
          <button className="login-button" type="submit">로그인</button>
        </div>
        <div>
          <Link to="/signup">
            <button className="signup-button">회원가입</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;