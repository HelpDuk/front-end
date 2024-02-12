import "./Request.css";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Request({request}) {
    
    const navigate = useNavigate();

    const goToDetail = (taskId) => {
        navigate(`/detailPage/${taskId}`);
    }

    return (
        <div className="requests">
            {request.map((request) => (
                <div className="request" key={request.taskId} onClick={() => goToDetail(request.taskId)}>
                    <div className="contents">
                        <div className="requestTitle">
                            <h2>{request.title}</h2>
                            <div className="isSolved">{request.taskStatus}</div>
                        </div>

                        <div className="detail">{request.content}</div>

                        <div className="category">{request.category}</div>
                    </div>
                    <div className="price"><h2>{request.requestFee}원</h2></div>
                    <div className="image"><img src={request.imageUrl} alt="Sample Image" /></div>
                </div>
            ))}
        </div>
    );
}

export default Request;
