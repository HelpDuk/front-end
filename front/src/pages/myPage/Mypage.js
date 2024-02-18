import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Mypage.css";
import fullheart from '../../assets/image/하트.png';
import { Link } from "react-router-dom";
import Temperature from "../../components/Temperature";
import defaultProfileImage from '../../assets/image/user.png';
import { useUser } from '../../components/UserContext';

function Mypage () {
    const [userData, setUserData] = useState({
        userEmail: "",
        nickName: "익명의 유저",
        temperature: "50",
        profileImage: null,
    });
    const { ACCESS_TOKEN } = useUser();

    const reviewCnt = 0;

    // let ACCESS_TOKEN = localStorage.getItem("accessToken");
    // let ACCESS_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzA3MDczMTU0LCJleHAiOjE3MDcwNzY3NTR9.9fAEZiDgpHj08WjnOISBpBZ2_nDxtQaolMbvp4VCwfA`;

    
    useEffect(() => {
        GetUearData();
    }, []);

    const handleLogout = async () => {
        localStorage.clear();
    }

    // useEffect(() => {
    //     handleLogout();
    // })

    const GetUearData = async () => {
        axios.get('/api/mypage', {headers: {
            'X-AUTH-TOKEN': `${ACCESS_TOKEN}`
        }})
            .then((response) => {
                console.log(response);
                setUserData(response.data);
            })
            .catch((error) => {
                console.error("마이 페이지 정보 가져오기 실패:", error);
                alert('사용자 정보를 가져오는 중 오류가 발생했습니다.');
            });
    };

    const profileImage = userData.profileImage || defaultProfileImage;

    return (
            <div className="mypage" style={{padding: "20px"}}>
            <div>
            <div className="myrequestsList" style={{marginBottom: "65px"}}>
                <div className="userProfile">
                    <div className="userinfo">
                        <img className="userImg" alt="user" src={profileImage} />
                        <h1>{userData.nickName}</h1>
                        <h5 style={{color: "#A3A3A3", fontSize: "1em"}}>{userData.userEmail}</h5>
                    </div>
                    <div className="userSetting">
                        <Link to={"/"} onClick={handleLogout}>
                            <h4>로그아웃</h4>
                        </Link>
                        <Link to={"./ProfileEdit"}>
                            <h4>프로필 수정</h4>
                        </Link>
                    </div>  
                </div>
                <div style={{marginTop: "60px"}}>
                    <div className="mytemperature">
                        <h2>나의 온도</h2>
                        <div className="temperatureInfo">
                            <h2 style={{paddingRight: "5px", fontSize: "1.8em"}}>{userData.temperature}°C</h2>
                            <img alt="heart" src={fullheart} />
                        </div>
                    </div>
                    <Temperature userTemperature={userData.temperature} />
                </div>
                <div style={{marginTop: "80px"}}>
                    <h2 style={{marginBottom: "15px"}}>나의 거래</h2>
                    <ul style={{paddingTop: "40px"}}>
                    <li>
                        <Link to={"./myRequests"}><p style={{fontSize: "1.2em", paddingBottom: "20px"}} onMouseOver={() => {}}>의뢰 목록</p></Link>
                    </li>
                    <li>
                        <Link to={"./helpedRequests"}><p style={{fontSize: "1.2em", paddingBottom: "20px"}}>받은 의뢰 목록</p></Link>
                        </li>
                    <li>
                    <Link to={"./HelperList"}><p  style={{fontSize: "1.2em", paddingBottom: "20px"}}>관심목록</p></Link>
                        </li>
                    </ul>
                </div>
                <div style={{marginTop: "50px"}}>
                <Link to={`./reviewList`} state={{ reviewCnt: reviewCnt }} ><h2 style={{marginBottom: "15px"}}>받은 의뢰 후기</h2></Link>
                    {/* <p style={{fontSize: "1.2em", paddingTop: "10px", paddingLeft: "45px"}}>받은 의뢰 후기가 {reviewCnt}개 있습니다.</p> */}
                </div>
            </div>
            </div>
            </div>
        )
}

export default Mypage;