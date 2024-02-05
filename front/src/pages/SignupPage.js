import React, { useState } from 'react';
import axios from 'axios'; // Axios 사용
import { useNavigate } from 'react-router-dom';
import "../styles/SignupPage.css";

function SignupPage() {
    const [email, setEmail] = useState("");
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true); // 이메일 유효성 상태 추가

    const navigate = useNavigate();

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
        // 이메일 유효성 검사
        const pattern = /^[a-zA-Z0-9]+@duksung.ac.kr$/;
        // console.log(isEmailValid);
        const isValidEmail = pattern.test(event.currentTarget.value);
        setIsEmailValid(isValidEmail);
    }

    const onChangeIdHandler = (e) => {
        const idValue = e.target.value;
        setId(idValue);
        const isValidId = idCheckHandler(idValue);
        if (!isValidId) {
            // 유효하지 않은 경우 에러 상태 업데이트
            setIdError('닉네임은 2~15자로 입력해주세요.');
        } else {
            // 유효한 경우 에러 상태 초기화
            setIdError('');
        }
    }

    const onChangePasswordHandler = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
            passwordCheckHandler(value, confirm);
        } else {
            setConfirm(value);
            passwordCheckHandler(password, value);
        }
    }

    const idCheckHandler = (id) => {
        if (id.length === 0) {
            setIdError('닉네임을 입력해주세요.');
            return false;
        } else if (id.length < 2 || id.length > 15) {
            setIdError('닉네임은 2~15자로 입력해주세요.');
            return false;
        }
        return true;
    }
    
    const passwordCheckHandler = (password, confirm) => {  // 비밀번호 유효성 검사 Handler 구현
        const passwordRegex = /^[a-zA-z0-9]{4,15}$/;
        if (password === '') {
          setPasswordError('비밀번호를 입력해주세요.');
          return false;
        } else if (!passwordRegex.test(password)) {
          setPasswordError('비밀번호는 4~15자의 영문 대/소문자, 숫자만 입력 가능합니다.');
          return false;
        } else if (confirm !== password) {
          setPasswordError('');
          setConfirmError('비밀번호가 일치하지 않습니다.');
          return false;
        } else {
          setPasswordError('');
          setConfirmError('');
          return true;
        }
    }

    const validateEmail = () => {
        const pattern = /^[a-zA-Z0-9._%+-]+@duksung.ac.kr$/;
        const isValidEmail = pattern.test(email);
        setIsEmailValid(isValidEmail);
        return isValidEmail;
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const isIdValid = idCheckHandler(id);
        const isPasswordValid = passwordCheckHandler(password, confirm);
        const isEmailValid = validateEmail();

        console.log("이메일: ", email);
        console.log("비밀번호: ", password);
    
        if (isIdValid && isPasswordValid && isEmailValid) {
            // 회원가입 요청을 보내기
            axios.post('http://localhost:3000/api/sign/sign-up', { params:  {
                userEmail: email,
                password: password
            } })
                .then((response) => {
                    if (response.data.success) {
                        // 회원가입 성공
                        alert('환영합니다! 부름부릉 회원가입이 완료되었습니다.');
                        navigate('/login'); // 로그인 페이지로 이동
                    } else {
                        // 회원가입 실패
                        // 로그인이 실패한 경우 페이지 새로고침
                        window.location.reload();
                        alert('다시 시도해주세요.');
                    }
                })
                .catch((error) => {
                    console.error('Error occurred during signup:', error);
                    alert('회원가입 중 오류가 발생했습니다.');
                });
        } else {
            console.log('유효성 검사를 통과하지 못했습니다.');
        }
    }



    return (
        <div className="signup">
            <h2 className='title'>회원가입</h2>
            <form onSubmit={onSubmit}>
                <div className="email-label">이메일</div>
                <input name="email" type="email" placeholder="user@duksung.ac.kr" value={email} onChange={onEmailHandler} />
                {!isEmailValid && <small>덕성여자대학교 웹메일로만 가입이 가능합니다.</small>}
                <div className="pw-label">비밀번호</div>
                <span>영문, 숫자를 포함한 4자 이상의 비밀번호를 입력해주세요.</span>
                <br />
                <input name="password" type="password" placeholder="비밀번호" value={password} onChange={onChangePasswordHandler} />
                {passwordError && <small>{passwordError}</small>}
                <div className="confirmpw-label">비밀번호 확인</div>
                <input name="confirm" type="password" placeholder="비밀번호 확인" value={confirm} onChange={onChangePasswordHandler} />
                {confirmError && <small>{confirmError}</small>}
                <div className="nickname-label">닉네임</div>
                <p>개성 있는 닉네임을 설정해 보세요. (2~15자)</p>
                <input name="nickname" type="text" placeholder="별명 (2~15자)" value={id} onChange={onChangeIdHandler} />
                {idError && <small>닉네임은 2~15자만 입력 가능합니다.</small>}
                <div>
                    <button type="submit" className="signup-button">회원가입하기</button>
                </div>
                <div className="toLogin">
                    이미 아이디가 있으신가요? <a href="/login">로그인</a>
                </div>
            </form>
        </div>
    );
}
export default SignupPage;