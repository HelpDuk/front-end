import React, { useState, useEffect } from 'react';
import "../styles/Nav.css";
import logImage from '../assets/image/부름부릉.jpg';
// import alarmImage from '../assets/image/알림.jpg';
import chatImage from '../assets/image/채팅.jpg';
import {Link, useLocation} from "react-router-dom"
import { useUser } from './UserContext';
import defaultProfileImage from '../assets/image/user.png';
let prePath = '';

function Nav () {
    const [isLogin, setIsLogin] = useState(true);
    const { userImage } = useUser();
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

    const profileImage = userImage || defaultProfileImage;

    return (
        <div className="navbar">
            <div>
                <Link to={"./"}> 
                    <img className="log" alt="buleumbuleung" src={logImage} />
                </Link>
            </div>
            {isLogin ? (
             <div className="navIcon">
                <Link to={"./chatpage"}>
                    <img className="navchat" alt="chatRome" src={chatImage} />
                </Link>
                {/* <Link to={"./alert"}>
                    <img className="navalarm" alt="alarm" src={alarmImage} />
                </Link> */}
                <Link to={"./mypage"}>
                    <img className="navprofile" alt="profile" src={profileImage} />
                </Link>
            </div> ) : (
                // 로그인 전
            <div>
            <Link to={"./login"}>
                <strong>로그인/회원가입</strong>
            </Link>
        </div>
             )}
        </div>
    )
}

export default Nav;