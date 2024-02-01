import "./Mypage.css"
import heart from '../../assets/image/하트.png';
import emptyHeart from "../../assets/image/빈하트.png"
import { Link } from "react-router-dom";
import ReviewDetail from './ReviewDetail';
import { useUser } from '../../components/UserContext';
import Temperature from "../../components/Temperature";
import { useState } from "react";

function Mypage () {
    const { userImage, nickname } = useUser();
    const [choiceHelper, setChoiceHelper] = useState(false);

    const ChangeHeart = () => {

    }

    const userTemperature = 90; // 사용자 온도

    const reviewNum = 2; // 받은 의뢰 후기 
    
    return (
        <div className="mypage">
            <div>
                <div className="userProfile">
                    <div className="userinfo">
                        <img className="userImg" alt="user" src={userImage} />
                        <h1>{nickname}</h1>
                        <p style={{color: "#A3A3A3"}}>subin2@dukksung.ac.kr</p>
                    </div>
                    <div className="userSetting">
                        <Link to={"../"}>
                            <h4>로그아웃</h4>
                        </Link>
                        <Link to={"./ProfileEdit"}>
                            <h4>프로필 수정</h4>
                        </Link>
                    </div>  
                </div>
                <div className="temperature" style={{marginTop: "60px"}}>
                    <div className="mytemperature">
                        <h2>나의 온도</h2>
                        <div className="temperatureInfo">
                            <h2 style={{color: "#AAD9BB", fontSize: "1.7em"}}>{userTemperature}°C</h2>
                            <img alt="heart" src={heart} />
                        </div>
                    </div>
                    <Temperature userTemperature={userTemperature} />
                </div>
                <div style={{marginTop: "80px"}}>
                    <h2 style={{marginBottom: "15px"}}>나의 거래</h2>
                    <ul style={{paddingTop: "20px"}}>
                    <li>
                        <Link to={"./myRequests"}><p style={{fontSize: "1.2em"}}>의뢰 목록</p></Link>
                    </li>
                    <li>
                        <Link to={"./helpedRequests"}><p style={{fontSize: "1.2em"}}>받은 의뢰 목록</p></Link>
                        </li>
                    <li>
                    <Link to={"./HelperList"}><p  style={{fontSize: "1.2em"}}>관심목록</p></Link>
                        </li>
                    </ul>
                </div>
                <div style={{marginTop: "80px"}}>
                <Link to={`./reviewList`} state={{ reviewNum: reviewNum }} ><h2 style={{marginBottom: "15px"}}>받은 의뢰 후기 {reviewNum}</h2></Link>
                    <p style={{paddingTop: "20px", paddingLeft: "25px"}}>받은 의뢰 후기가 {reviewNum}개 있습니다.</p>
                </div>
            </div>
            <div>
                <div className="userProfile">
                    <div className="userinfo">
                        <img className="userImg" alt="user" src={userImage} />
                        <h1>{nickname}</h1>
                    </div>
                    <div className="userSetting">
                        <button style={{border: "none", backgroundColor: "transparent"}}>
                            <img className="loveHelper" alt="emptyHear" src={emptyHeart} />
                        </button>
                    </div>  
                </div>
                <div className="temperature" style={{marginTop: "60px"}}>
                    <div className="mytemperature">
                        <h2>{nickname} 온도</h2>
                        <div className="temperatureInfo">
                            <h2 style={{color: "#AAD9BB", fontSize: "1.7em"}}>{userTemperature}°C</h2>
                            <img alt="heart" src={heart} />
                        </div>
                    </div>
                    <Temperature userTemperature={userTemperature} />
                </div>
                <hr style={{width: "100%", height: "1.5px", margin: "90px 0", border: "none", backgroundColor: "#ABAAAA"}} />
                <ReviewDetail reviewNum={reviewNum}/>
            </div>
            
        </div>
    )
}

export default Mypage;