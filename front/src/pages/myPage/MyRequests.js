import React, { useEffect, useState } from "react";
import "./MyRequests.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useUser } from '../../components/UserContext';

function MyRequests() {
    const [userPosts, setUserPosts] = useState([]);
    const navigate = useNavigate();
    const { ACCESS_TOKEN } = useUser();

    // let ACCESS_TOKEN = localStorage.getItem("accessToken");
    // let ACCESS_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzA3MDczMTU0LCJleHAiOjE3MDcwNzY3NTR9.9fAEZiDgpHj08WjnOISBpBZ2_nDxtQaolMbvp4VCwfA`;

    useEffect(() => {
        GetMyRequests();
    }, []);

    const GetMyRequests = () => {
        axios.get('/api/mypage/task', {headers: {
            'X-AUTH-TOKEN': `${ACCESS_TOKEN}`
        }})
            .then((response) => {
                console.log(response.data.taskList);
                setUserPosts(response.data.taskList);
            }) 
            .catch((error) => {
                console.error("의뢰 목록을 불러오는 데 실패했습니다.", error);
            });
    };    

    const Goto = (taskId) => {
        navigate(`/detailPage/${taskId}`);
    }

    const stopPropagation = (e) => {
        e.stopPropagation(); // 이벤트 버블링 방지
    };

    return (
        <div style={{padding: "20px"}}>
            <h1 className="editTitle">의뢰 목록</h1>
            <div className="myRequests">
                {userPosts.map((request) => (
                <div key={request.taskId} className="myList" onClick={() => Goto(request.taskId)}>
                    <img className="requestsPhoto" alt="requestsPhoto" src={request.imageUrl} />
                    <div className="ListInfo">
                        <h3>{request.title}</h3>
                        <h4 style={{color: "#757575"}}>{request.uploadDate}</h4>
                        <div className="dealStatus">
                            <h4 className="requestsState">{request.taskStatus}</h4>
                            <h3>{request.requestFee}원</h3>
                        </div>
                        {!request.reviewWritten && (
                          <Link to={`../writeReview/${request.taskId}`} onClick={stopPropagation}><h3 className="reviewwriterButton">후기 작성</h3></Link>
                        )}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default MyRequests;