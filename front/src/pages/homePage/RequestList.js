import React from 'react';
import "./RequestList.css";
import Request from "./Request";
import Category from "./Category";
import searchIcon from "../../assets/homePage/SearchIcon.png";
import dropdownUp from "../../assets/homePage/up.png";
import dropdownDown from "../../assets/homePage/down.png";

const RequestList = () => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    return(
        <div className="requestList">
            <div className="list_wrapper">
                <Request /> 
                <Request />
                <Request />
                <Request />
                <Request /> 
            </div>

            <div className="filtering">
                <div className="search">
                    <div className="searchIcon">
                        <img src={searchIcon} />
                        <h4>검색</h4>
                    </div>
                    <input className="searchbar" placeholder="검색어를 입력하세요" />
                </div>
                <button className="categoryButton" onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                        {
                            dropdownVisibility
                                ? <h4><img src={dropdownDown} /> 카테고리</h4>
                                : <h4><img src={dropdownUp} /> 카테고리</h4>
                        }
                    </button>
                    <Category visibility={dropdownVisibility} />
            </div>   
        </div>
    );
};

export default RequestList;

/* 
import "./RequestList.css";
import Request from "./Request";
import searchIcon from "../../../assets/homePage/SearchIcon.png";
import { useState } from "react";

const RequestList = () => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === "" ? request : request.filter((it) => it.content.includes(search));
    }

    return(
        <div className="requestList">
            <div className="list_wrapper">
                <Request /> 
                <Request />
            </div>
            <div className="search">
            <div className="searchIcon">
                <img src={searchIcon} />
                <h4>검색</h4>
            </div>
            <input className="searchbar" placeholder="검색어를 입력하세요" />
        </div>
        </div>

    );
};

export default RequestList;
*/