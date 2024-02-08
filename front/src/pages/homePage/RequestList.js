import React, { useState, useEffect } from 'react';
import "./RequestList.css";
import Request from "./Request";
import Category from "./Category";
import searchIcon from "../../assets/homePage/SearchIcon.png";
import dropdownUp from "../../assets/homePage/up.png";
import dropdownDown from "../../assets/homePage/down.png";
import { useParams } from 'react-router-dom';

const RequestList = () => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const [keyword, setKeyword] = useState('');


    // 카테고리 별 선택 여부 저장

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

    const handleCategoryChange = (updatedCategories) => {
        setSelectedCategories(updatedCategories);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setKeyword(e.target.value);
    };

    return (
        <div className="requestList">
            <div className="list_wrapper_container">
                <div className="list_wrapper_area"><hr/></div>
                <div className="list_wrapper">
                    <Request Keyword={keyword} selectedCategories={selectedCategories} />
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
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleSearchSubmit(e);
                                    setKeyword(''); // 검색 후 검색어 비우기
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
                    onCategoryChange={handleCategoryChange} // 카테고리 변경 시 호출할 콜백 함수 전달
                />
            </div>
        </div>
    );
};

export default RequestList;