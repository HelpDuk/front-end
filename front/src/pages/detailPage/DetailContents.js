import { useState } from "react";
import "./DetailContents.css";
import { useMock } from '../../components/MockContext';
import { useParams } from 'react-router-dom';
// import StateDropDown from "./StateDropDown";

function DetailContents() { 
    const { mockDate, setMockDate } = useMock();
    const { taskId } = useParams();

    const requestIndex = mockDate.findIndex(request => request.taskId === +taskId);
    const request = mockDate[requestIndex];

    // taskStatus 상태를 관리하기 위한 useState 설정
    // request가 undefined가 아닐 경우에만 초기 상태를 설정합니다.
    const [taskStatus, setTaskStatus] = useState(request ? request.taskStatus : '');

    // select 요소의 값이 변경될 때 호출될 함수
    const handleStatusChange = (event) => {
        const updatedStatus = event.target.value;

        // 선택된 상태로 taskStatus 상태를 업데이트
        setTaskStatus(updatedStatus);

        // 전체 목록을 업데이트하여 상태 변경 반영
        const updatedMockDate = [...mockDate];
        updatedMockDate[requestIndex] = { ...request, taskStatus: updatedStatus };
        setMockDate(updatedMockDate);
    };

    if (!request) {
        return <div>요청을 찾을 수 없습니다.</div>;
    }

    return(
        <div className="detailcontents">
            
            <div>
            <div key={request.taskId} className="userInput">
                <div className="firstLine">
                    <h3>{request.title}</h3>
                </div>
                <div className="secondLine">
                    <h5>{request.category}</h5>
                    <small>날짜</small>
                </div>
                <div className="thirdLine">
                    <h4>가격</h4>
                    <h6>계좌 이체</h6>
                    <h5>심부름비: </h5>
                    <h4>{request.price || request.requestFee}원</h4>
                    <h6>심부름 전 계좌이체</h6>
                </div>
                <div className="deadLine">
                    <h6>{request.uploadDate}까지</h6>
                </div>
                <div className="explanation">
                    <p>{request.detail}</p>
                </div>
                <div className="chatCount">
                    <small>채팅 개수</small>
                </div>
            </div>

            <div className="others">
                <h5>거래완료</h5>
                <select value={taskStatus} onChange={handleStatusChange}>
                    <option value="거래 전">거래 전</option>
                    <option value="예약 중">예약 중</option>
                    <option value="거래 완료">거래 완료</option>
                </select>
                <button>채팅하기</button>
            </div>
            </div>
        
        </div>
    );
}

export default DetailContents;