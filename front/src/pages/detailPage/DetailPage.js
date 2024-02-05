import "./DetailPage.css";
import React, { useState, useEffect } from 'react';
import Profile from "./Profile";
import DetailContents from "./DetailContents";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useUser } from "../../components/UserContext";


function DetailPage({mockRequest}) { 
    const { taskId } = useParams();
    const [requestDetail, setrequestDetail] = useState([]);

    //let ACCESS_TOKEN = localStorage.getItem("accessToken");
    const { ACCESS_TOKEN } = useUser();

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
        <div className="detailpage">
            <div className="leftSide">
                <img src={requestDetail.imageUrl} />
                <Profile />
            </div>
            <div className="rightSide">
                <DetailContents />
            </div>
        </div>
    );
}

export default DetailPage;