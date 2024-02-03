import { useState } from "react";
import "./DetailContents.css";
import {Link} from "react-router-dom";
import { useMock } from '../../components/MockContext';
import { useParams } from 'react-router-dom';

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
                    <small>{request.uploadDate}</small>
                </div>
                <div className="thirdLine">
                    <h4>{request.requestFee}원</h4>
                    <h6>{request.requestFeeMethod}</h6>
                    <h5>심부름비: </h5>
                    <h4>{request.taskFee}원</h4>
                    <h6>{request.taskFeeMethod}</h6>
                </div>
                <div className="deadLine">
                    <h6>{request.taskTime}까지</h6>
                </div>
                <div className="explanation">
                    <p>{request.detail}</p>
                </div>
                <div className="chatCount">
                    <small>채팅수 {request.chattingCount}</small>
                </div>
            </div>

            <div className="others">
                <h5>{request.taskStatus}</h5>
                {request.isItMine && ( //isItMine일 때만 변경 가능
                    <select value={taskStatus} onChange={handleStatusChange}>
                        <option value="거래 전">거래 전</option>
                        <option value="예약 중">예약 중</option>
                        <option value="거래 완료">거래 완료</option>
                    </select>
                )}
                
                <div className="moveToChat">
                    <Link to={"/chatpage"}>
                        <h4>채팅하기</h4>
                    </Link>
                </div>
            </div>
            </div>
        
        </div>
    );
}

export default DetailContents;