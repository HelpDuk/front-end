import React, { useState } from 'react';
import "../styles/LoginPage.css";
import cloud_black from "../assets/image/cloud_black.png";

function LoginPage () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="login">
      <div className="image-container"> 
        <img src={cloud_black} alt="cloud_black" className="cloud-logo" /> {/* 수정된 이미지 파일 사용 */}
      </div>
      <form>
        <div>
          <input name="email" type="email" value={email} onChange={onEmailHandler} placeholder="user@duksung.ac.kr" />
        </div>
        <div>
          <input name="password" type="password" value={password} onChange={onPasswordHandler} placeholder="비밀번호"  />
        </div>
        <div>
            <button className="login-button" type="submit" onSubmit={onSubmit}>로그인</button>
        </div>
        <div>        
            <button className="signup-button" type="button">회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;