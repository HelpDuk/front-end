import React, { useState, useEffect } from 'react';
import "./RequestList.css";
import Request from "./Request";
import Category from "./Category";
import searchIcon from "../../assets/homePage/SearchIcon.png";
import dropdownUp from "../../assets/homePage/up.png";
import dropdownDown from "../../assets/homePage/down.png";
// import { useMock } from '../../components/MockContext';
import { useParams } from 'react-router-dom';

const RequestList = () => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const [keyword, setKeyword] = useState('');

    // const { mockDate, setMockDate } = useMock();
    const { taskId } = useParams();
    // const requestIndex = mockDate.findIndex(request => request.taskId === +taskId);
    // const request = mockDate[requestIndex];

    //카테고리 별 선택 여부 저장
    // 업데이트된 카테고리 정보를 axios get할 때 selectedCategories를 param으로 전달해 주면 될 것 같아!
    const [selectedCategories, setSelectedCategories] = useState({
        onlyYet: false,
        onlyMine: false,
        school: false,
        dormitory: false,
        etc: false,
        print: false,
        food: false,
        coverFor: false,
        clean: false,
        eventAssistant: false,
        bug: false,
    });
    //console.log("카테고리 별 선택 여부:" ,selectedCategories);
    //선택된 카테고리(값이 true) selectedCategories의 key값만 따로 저장
    // const selectedKeys = Object.keys(selectedCategories).filter(key => selectedCategories[key] === true);
    //console.log("선택된 카테고리:", selectedKeys);
    

    const handleCategoryChange = (updatedCategories) => { 
        setSelectedCategories(updatedCategories);
    };

    // const filteredRequests = mockDate.filter(request =>
    //     //검색에 따라 필터링(제목, 내용, 카테고리 검색 가능)
    //     request.title.toLowerCase().includes(keyword.toLowerCase()) ||
    //     request.content.toLowerCase().includes(keyword.toLowerCase()) ||
    //     request.category.toLowerCase().includes(keyword.toLowerCase()) 

    //     // 카테고리에 따라 필터링 추가
    // );
    // console.log(filteredRequests);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="requestList">
            <div className="list_wrapper_container">
                <div className="list_wrapper_area"><hr/></div>
                <div className="list_wrapper">
                    {/* Request 컴포넌트에 의뢰 목록 props로 전달 */}
                    <Request  />
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
                onCategoryChange={handleCategoryChange} // 카테고리 변경 시 호출할 콜백 함수 전달
            />
            </div>
        </div>
    );
};

export default RequestList;