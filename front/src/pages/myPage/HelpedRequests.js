import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../styles/ProfileEdit.css"
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../components/UserContext';

function SupportLists() {
    const [userPosts, setUserPosts] = useState([]);
    const navigate = useNavigate();
    const { ACCESS_TOKEN } = useUser();

    useEffect(() => {
        GetHelpedRequests();
    }, []);

    const GetHelpedRequests = () => {
        axios.get('/api/home', {headers: { 
            'X-AUTH-TOKEN': `${ACCESS_TOKEN}`
        }})
            .then((response) => {
                console.log(response.data.taskList);
                setUserPosts(response.data.taskList);
            })
            .catch((error) => {
                console.error("받은 의뢰 목록을 불러오는데 실패했습니다.", error);
            });
    };    

    const Goto = (taskId) => {
        navigate(`/detailPage/${taskId}`);
    }
    
    return (
        <div className="supportLists"  style={{padding: "20px"}}>
            <h1 className="editTitle">받은 의뢰 목록</h1>
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
                </div>
            </div>
            ))}</div>
        </div>
    )
}

export default SupportLists;