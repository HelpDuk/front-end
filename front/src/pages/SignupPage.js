import React, {useState} from 'react'
import "../styles/SignupPage.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [nickname, setNickname] = useState("")

  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value)
  }

  const onNicknameHandler = (event) => {
    setNickname(event.currentTarget.value);
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if(password !== confirmPassword) {
      return alert('비밀번호가 일치하지 않습니다.')
    }

    // 학교 이메일 인증 및 회원가입 처리 로직을 추가
  }

    return (
        <div className="signup">
            <h2 className='title'>회원가입</h2>
            <form onSubmit={onSubmit}>
                <div className="email-label">이메일</div>
                <input name="email" type="email" placeholder="user@duksung.ac.kr" value={email} onChange={onEmailHandler} />
                <br />
                <button type="button" className="email-button">이메일 인증하기</button>

                <div className="pw-label">비밀번호</div>
                <span>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>
                <br />
                <input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} />

                <div className="confirmpw-label">비밀번호 확인</div>
                <input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} />

                <div className="nickname-label">닉네임</div>
                <p>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
                <br />
                <input name="nickname" type="text" placeholder="별명 (2~15자)" value={nickname} onChange={onNicknameHandler} />
                <div>
                    <button type="submit" className="signup-button">회원가입하기</button>
                </div>
                <div>
                    이미 아이디가 있으신가요? <a href="/login">로그인</a>
                </div>
            </form>
        </div>
    );
}
export default SignupPage;