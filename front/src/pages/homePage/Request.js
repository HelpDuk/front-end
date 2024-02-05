import "./Request.css";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../components/UserContext';

function Request({Keyword, selectedCategories}) {

    console.log("Request 키워드: ", Keyword);
    
    const navigate = useNavigate();
    const { ACCESS_TOKEN } = useUser();
    const [requesta, setRequest] = useState([]);

    const goToDetail = (taskId) => {
        navigate(`/detailPage/${taskId}`);
    }

    useEffect(() => {
        GetRequests();
        GetSearchRequests();
        // GetCategoryRequests();
    }, []);

    //의뢰목록
    const GetRequests = () => {
        axios.get('/api/home', {
            headers: {
                'X-AUTH-TOKEN': `${ACCESS_TOKEN}`
            }
        })
            .then((response) => {
                console.log(response.data.taskList);
                setRequest(response.data.taskList);
            })
            .catch((error) => {
                console.error("의뢰 목록을 불러오는데 실패했습니다.", error);
            });
    };  

    //검색된 의뢰목록
    const GetSearchRequests = () => {
        console.log("키워드: ", Keyword);
        axios.get('http://localhost:3000/api/tasks/search', { params: { keyword: Keyword } },
            {
                headers: {
                    'X-AUTH-TOKEN': `${ACCESS_TOKEN}`
                }
            })
            .then((response) => {
                console.log(response.data.taskList);
                setRequest(response.data.taskList);
            })
            .catch((error) => {
                console.error("검색-받은 의뢰 목록을 불러오는데 실패했습니다.", error);
            });
    }; 

    //카테고리 의뢰목록
    // const GetCategoryRequests = () => {
    //     axios.get('/api/tasks/category',  { params: {keyword:selectedCategories}},
    //     {headers: { 
    //         'X-AUTH-TOKEN': `${ACCESS_TOKEN}`
    //     }})
    //         .then((response) => {
    //             console.log(response.data.taskList);
    //             setRequest(response.data.taskList);
    //         })
    //         .catch((error) => {
    //             console.error("받은 의뢰 목록을 불러오는데 실패했습니다.", error);
    //         });
    // }; 

    return (
        <div className="requests">
            {requesta.map((request) => (
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
