import React, { useState, useEffect } from 'react';
import "./RequestList.css";
import Request from "./Request";
import Category from "./Category";
import searchIcon from "../../assets/homePage/SearchIcon.png";
import dropdownUp from "../../assets/homePage/up.png";
import dropdownDown from "../../assets/homePage/down.png";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../components/UserContext';

const RequestList = () => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const [keyword, setKeyword] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("검색 키워드: ", keyword);
        GetSearchRequests();
        setKeyword(''); // 검색 후 검색어 비우기
    };

    const [request, setRequest] = useState([]);
    const { ACCESS_TOKEN } = useUser();

    useEffect(() => {
        GetRequests();
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
        axios.get('http://localhost:3000/api/tasks/search',
            {
                headers: {
                    'X-AUTH-TOKEN': `${ACCESS_TOKEN}`
                },
                params: { keyword: keyword }
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
    const GetCategoryRequests = (categoryList) => {
        console.log("전달 param: ", categoryList );

        // 모든 카테고리가 false인지 검사
        const isAllCategoriesFalse = Object.values(categoryList).every(category => category === false);
        // 모든 카테고리가 false인 경우 모든 게시물 가져오기
        if (isAllCategoriesFalse) {
            GetRequests();
            return;
        }
        axios.get('http://localhost:3000/api/tasks/category', 
            {
                headers: { 
                'X-AUTH-TOKEN': `${ACCESS_TOKEN}`
                },
                params: { onlyYet: categoryList.onlyYet,
                        onlyMine: categoryList.onlyMine,
                        school: categoryList.school,
                        dormitory: categoryList.dormitory,
                        etc: categoryList.etc,
                        print: categoryList.print,
                        food: categoryList.food,
                        coverFor: categoryList.coverFor,
                        clean: categoryList.clean,
                        eventAssistant: categoryList.eventAssistant,
                        bug: categoryList.bug, }
            })
            .then((response) => {
                console.log(response.data.taskList);
                setRequest(response.data.taskList);
            })
            .catch((error) => {
                console.error("카테고리-받은 의뢰 목록을 불러오는데 실패했습니다.", error);
            });
    };

    return (
        <div className="requestList">
            <div className="list_wrapper_container">
                <div className="list_wrapper_area"><hr/></div>
                <div className="list_wrapper">
                    <Request request={request} />
                </div>
            </div>

            <div className="filtering">
                <form onSubmit={handleSearchSubmit}>
                    <div className="search">
                        <div className="searchIcon">
                            <img src={searchIcon} alt="Search Icon" />
                            <h4>검색</h4>
                        </div>
                        <input
                            className="searchbar"
                            placeholder="검색어를 입력하세요"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleSearchSubmit(e);
                                }
                            }}
                        />
                    </div>
                </form>
                <button className="categoryButton" onClick={() => setDropdownVisibility(!dropdownVisibility)}>
                    {dropdownVisibility ? <h4><img src={dropdownDown} alt="Dropdown Down" /> 카테고리</h4>
                        : <h4><img src={dropdownUp} alt="Dropdown Up" /> 카테고리</h4>
                    }
                </button>
                <Category
                    visibility={dropdownVisibility}
                    onCategoryChange={GetCategoryRequests} // 카테고리 변경 시 호출할 콜백 함수 전달
                />
            </div>
        </div>
    );
};

export default RequestList;