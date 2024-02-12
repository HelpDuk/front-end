import "./Mypage.css";
import fullHeart from "../../assets/image/하트.png";
import emptyHeart from "../../assets/image/빈하트.png";
import { useParams } from "react-router-dom";
import ReviewDetail from "./ReviewDetail";
import Temperature from "../../components/Temperature";
import { useEffect, useState } from "react";
import defaultProfileImage from '../../assets/image/user.png';
import axios from "axios";
import { useUser } from "../../components/UserContext";

function OtherPage() {
  const { otherUserId } = useParams(); // userId 추출

  const [userDetails, setUserDetails] = useState({});
  const [like, setLike] = useState(false); // 하트 상태를 로컬 상태로 관리
  const { ACCESS_TOKEN } = useUser();

  useEffect(() => {
    GetOtherData();
  }, [otherUserId]);

  const GetOtherData = () => {
    axios
      .get(`/api/user`, {
        headers: {
          "X-AUTH-TOKEN": `${ACCESS_TOKEN}`,
        },
        params: { otherUserId },
      })
      .then((response) => {
        console.log(response.data);
        setUserDetails(response.data);
        setLike(response.data.like); // 응답에 따라 like 상태 설정
      })
      .catch((error) => {
        console.error("사용자 정보를 가져오는 데 실패했습니다.", error);
      });
  };

 const addHeart = async () => {
    try {
      await axios.post(`/api/like/create`, null, {params: {
        likeUserId: parseInt(otherUserId, 10),
      }, headers: {
        "X-AUTH-TOKEN": `${ACCESS_TOKEN}`,
    }});
      setLike(true); // 상태를 업데이트하여 UI에 반영
    } catch (error) {
      console.error("하트 추가에 실패했습니다.", error);
    }
  };

  const deleteHeart = async () => {
    try {
      await axios.delete(`/api/like/delete`, {params: {
        likeUserId: parseInt(otherUserId, 10),
      }, headers: {
        "X-AUTH-TOKEN": `${ACCESS_TOKEN}`,
    }});
      setLike(false); // 상태를 업데이트하여 UI에 반영
    } catch (error) {
      console.error("하트 삭제에 실패했습니다.", error);
    }
  };

  const changeHeart = () => {
    if (like) {
      deleteHeart(); // 이미 좋아요 상태이면 삭제
    } else {
      addHeart(); // 좋아요 상태가 아니면 추가
    }
  };

  const profileImage = userDetails.profileImage || defaultProfileImage;

  return (
    <div className="mypage" style={{ padding: "20px" }}>
      <div key={userDetails.otherUserId}>
        <div className="myrequestsList">
          <div className="userProfile">
            <div className="userinfo">
              <img className="userImg" alt="user" src={profileImage} />
              <h1>{userDetails.nickName}</h1>
            </div>
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              onClick={changeHeart}
            >
              <img
                className="loveHelper"
                alt="heart"
                src={like ? fullHeart : emptyHeart}
              />
            </button>
          </div>
          <div className="temperature" style={{ marginTop: "60px" }}>
            <div className="mytemperature">
              <h2>{userDetails.nickName} 온도</h2>
              <div className="temperatureInfo">
                <h2 style={{ paddingRight: "5px", fontSize: "1.8em" }}>
                  {userDetails.temperature}°C
                </h2>
                <img alt="heart" src={fullHeart} />
              </div>
            </div>
            <Temperature userTemperature={userDetails.temperature} />
          </div>
          <hr
            style={{
              width: "100%",
              height: "1.5px",
              margin: "90px 0",
              border: "none",
              backgroundColor: "#ABAAAA",
            }}
          />
          <h2 style={{ padding: "0 0 50px 10px", fontSize: "24px" }}>
            후기 {userDetails.reviewCnt || 0}개
          </h2>
          <div className="reviewDetail">
            {userDetails.reviewDtoList &&
              userDetails.reviewDtoList.map((review) => (
                <div style={{ marginLeft: "30px" }}>
                  <ReviewDetail
                  profileImage={review.profileImage}
                    otherUserId={review.otherUserId}
                    nickName={review.nickName}
                    content={review.content}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherPage;
