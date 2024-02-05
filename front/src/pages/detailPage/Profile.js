import "./Profile.css";
import React, { useState, useEffect } from 'react';
import Temperature from "../../components/Temperature";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {
    const { taskId } = useParams();
    const [requestDetail, setrequestDetail] = useState([]);

    //let ACCESS_TOKEN = localStorage.getItem("accessToken");
    let ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzA3MTM0MzA2LCJleHAiOjE3MDcxMzc5MDZ9.Y0TubymIVtS8SLRhplD7beV4tHNV7Rxl4R_g9SegsOY";


    //axios를 이용하여 상세 페이지 정보 get
    // useEffect를 이용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정
    useEffect(() => {
        // axios를 통해 채팅방 목록 get
      const RequestDetail =  async () => {
          try {
              const response = await axios.get(
                `http://localhost:3000/api/task/${taskId}`,
                {
                  headers: {
                    'X-AUTH-TOKEN': `${ACCESS_TOKEN}`, // 여기에 토큰 값을 넣어주세요
                  },
                }
              );
      
              // 받아온 데이터를 상태에 저장
              setrequestDetail(response.data);
              console.log(response.data);
            } catch (error) {
              console.error('API 호출 오류:', error);
          }
      };
  
      RequestDetail();
  
      }, []);

    return(
        <div className="profile">
            <div className="profile-contents">
                <img src={requestDetail.profileImage} />
                <h4>{requestDetail.nickName}</h4>
                <Temperature userTemperature={requestDetail.temperature} />
            </div>
        </div>
    );
}

export default Profile;