import React, { useState, useEffect } from 'react';
import "../styles/Nav.css";
import logImage from '../assets/image/부름부릉.jpg';
// import alarmImage from '../assets/image/알림.jpg';
import chatImage from '../assets/image/채팅.jpg';
import {Link} from "react-router-dom"
import { useUser } from './UserContext';
import defaultProfileImage from '../assets/image/user.png';

function Nav () {
    const [isLogin, setIsLogin] = useState(false);
    const { userImage, ACCESS_TOKEN } = useUser();

    useEffect(() => {
        // let ACCESS_TOKEN = localStorage.getItem("accessToken");
        // let ACCESS_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzA3MDYwNTQyLCJleHAiOjE3MDcwNjQxNDJ9.epDUjo_OWi9_8OfE1cqSOGAbh6xzohaNWousNw3BWxU`;
        if (ACCESS_TOKEN) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
            console.log("토큰 오류");
        }
    }, []);
    
    const profileImage = userImage || defaultProfileImage;

    return (
        <div className="navbar">
            <div>
                <Link to={"./"}> 
                    <img className="log" alt="buleumbuleung" src={logImage} />
                </Link>
            </div>
            {isLogin ? (
            // 로그인 전
            <div>
                <Link to={"./login"}>
                    <strong>로그인/회원가입</strong>
                </Link>
            </div> ) : (
            // 로그인 후
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
            </div> )}
        </div>
    )
}

export default Nav;