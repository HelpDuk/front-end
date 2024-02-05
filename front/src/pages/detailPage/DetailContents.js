import React, { useRef, useState, useEffect } from 'react';
import "./DetailContents.css";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailContents() { 

    const { taskId } = useParams();
    const [requestDetail, setrequestDetail] = useState([]);
    // request가 undefined가 아닐 경우에만 초기 상태를 설정합니다.
    const [taskStatus, setTaskStatus] = useState(requestDetail ? requestDetail.taskStatus : '');
    const [updatedStatus, setUpdatedStatus] = useState("");
    const didMountRef = useRef(false); 

    //let ACCESS_TOKEN = localStorage.getItem("accessToken");
    let ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzA3MTM0MzA2LCJleHAiOjE3MDcxMzc5MDZ9.Y0TubymIVtS8SLRhplD7beV4tHNV7Rxl4R_g9SegsOY";

    //axios를 이용하여 상세 페이지 정보 get
    // useEffect를 이용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정
    useEffect(() => {
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
      }, [taskId, updatedStatus]);


    // select 요소의 값이 변경될 때 호출될 함수
    //axios를 이용하여 변경된 taskStatus put
    
    const handleStatusChange = (event) => {
        const updatedStatus = event.target.value;
        setUpdatedStatus(updatedStatus); 
        setTaskStatus(updatedStatus);
    };

    useEffect(() => {
        console.log("업데이트 된 상태: ", updatedStatus);
        if (!didMountRef.current){ //마운트 시점에는 x, 업데이트 시점에만 o
            didMountRef.current = true;
        } else{
            console.log("업데이트 된 상태: ", updatedStatus);
            const StatusChange = async () => {
                try {
                    const response = await axios.put(
                        `http://localhost:3000/api/task/${taskId}`,
                        `"${updatedStatus}"`, //문자열로 전달
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'X-AUTH-TOKEN': `${ACCESS_TOKEN}`,
                            },
                        }
                    );
                    console.log("put한 거래 상태:", response.data);
                } catch (error) {
                    console.error('상태 변화 API 호출 오류:', error);
                }
            };
            StatusChange();
        }
    });
    

    //axios를 사용해 채팅방 정보 post(채팅하기 버튼)
    const handleMoveToChat = async () => {
        try {
            await axios.post('/chat/room', {params: { helperId:requestDetail.helperId, taskId:requestDetail.taskId}});
        } catch (error) {
            console.error('채팅방 데이터 전송 중 오류 발생:', error);
        }
    };

    return(
        <div className="detailcontents">
            
            <div>
            <div key={requestDetail.taskId} className="userInput">
                <div className="firstLine">
                    <h3>{requestDetail.title}</h3>
                </div>
                <div className="secondLine">
                    <h5>{requestDetail.category}</h5>
                    <small>{requestDetail.uploadDate}</small>
                </div>
                <div className="thirdLine">
                    <h4>{requestDetail.requestFee}원</h4>
                    <h6>{requestDetail.requestFeeMethod}</h6>
                    <h5>심부름비: </h5>
                    <h4>{requestDetail.taskFee}원</h4>
                    <h6>{requestDetail.taskFeeMethod}</h6>
                </div>
                <div className="deadLine">
                    <h6>{requestDetail.taskTime}까지</h6>
                </div>
                <div className="explanation">
                    <p>{requestDetail.content}</p>
                </div>
                <div className="chatCount">
                    <small>채팅수 {requestDetail.chattingCount}</small>
                </div>
            </div>

            <div className="others">
                <h5>{requestDetail.taskStatus}</h5>
                {requestDetail.isItMine && ( //isItMine일 때만 변경 가능
                    <select value={taskStatus} onChange={handleStatusChange}>
                        <option value="거래 전">거래 전</option>
                        <option value="예약 중">예약 중</option>
                        <option value="거래 완료">거래 완료</option>
                    </select>
                )}
                
                <button className="moveToChat" onClick={handleMoveToChat}>
                    <Link to={"/chatpage"}>
                        <h4>채팅하기</h4>
                    </Link>
                </button>
            </div>
            </div>
        
        </div>
    );
}

export default DetailContents;