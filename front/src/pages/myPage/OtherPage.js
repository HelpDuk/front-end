import "./Mypage.css"
import fullheart from '../../assets/image/하트.png';
import emptyHeart from "../../assets/image/빈하트.png"
import { useParams } from "react-router-dom";
import ReviewDetail from './ReviewDetail';
import Temperature from "../../components/Temperature";
import { useEffect, useState } from "react";
import profileImage from '../../assets/image/user.png';
import axios from 'axios';
import { useUser } from '../../components/UserContext';

function OtherPage () {
    const { userId } = useParams(); // userId 추출

    const [userDetails, setUserDetails] = useState({});
    const [currentLike, setCurrentLike] = useState(emptyHeart);
    const { ACCESS_TOKEN } = useUser();

    useEffect(() => {
        GetOtherData();
    }, []);

    const GetOtherData = () => {
        axios.get(`/api/user`, { headers: {
            'X-AUTH-TOKEN': `${ACCESS_TOKEN}`
        },  params: { userId } })
            .then((response) => {
                setUserDetails(response.data);
                setCurrentLike(response.data.isLiked ? fullheart : emptyHeart);
            })
            .catch((error) => {
                console.error("사용자 정보를 가져오는 데 실패했습니다.", error);
            });
    };
    

    const changeHeart = () => {
        const isLiked = currentLike === fullheart;
        if (isLiked) {
            axios.delete(`/api/like/delete`, { data: { likeUserId: parseInt(userId) } })
                .then(() => {
                    setCurrentLike(emptyHeart);
                })
                .catch((error) => {
                    console.error("Changing like status failed", error);
                });
        } else {
            axios.post(`/api/like/create`, { likeUserId: parseInt(userId) })
                .then(() => {
                    setCurrentLike(fullheart);
                })
                .catch((error) => {
                    console.error("Changing like status failed", error);
                });
        }
    };    

    return (
        <div className="mypage" style={{padding: "20px"}}>
        <div>
        <div className="myrequestsList">
            <div className="userProfile">
                <div className="userinfo">
                    <img className="userImg" alt="user" src={profileImage} />
                    <h1>{userDetails.nickName}</h1>
                </div>
                <div className="userSetting">
                    <button style={{border: "none", backgroundColor: "transparent"}}>
                        <img onClick={changeHeart} className="loveHelper" alt="emptyHear" src={currentLike} />
                    </button>
                </div>  
            </div>
            <div className="temperature" style={{marginTop: "60px"}}>
                <div className="mytemperature">
                    <h2>{userDetails.nickName} 온도</h2>
                    <div className="temperatureInfo">
                        <h2 style={{paddingRight: "5px", fontSize: "1.8em"}}>{userDetails.temperature}°C</h2>
                        <img alt="heart" src={fullheart} />
                    </div>
                </div>
                <Temperature userTemperature={userDetails.temperature} />
            </div>
            <hr style={{width: "100%", height: "1.5px", margin: "90px 0", border: "none", backgroundColor: "#ABAAAA"}} />
            <h2 style={{padding: "0 0 50px 10px", fontSize: "24px"}}>후기 {userDetails.reviewCnt || 0}개</h2>
            <div className="reviewDetail">
            {userDetails.reviewDtoList && userDetails.reviewDtoList.map((review) => (
            <div style={{marginLeft: "30px"}}>
                <ReviewDetail userId={review.userId} nickName={review.nickName} content={review.content} />
            </div>
            ))}</div>            
        </div>
        </div>
    </div>
    )    
}

export default OtherPage;