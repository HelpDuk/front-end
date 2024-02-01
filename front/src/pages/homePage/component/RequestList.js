import "./RequestList.css";
import Request from "./Request";
import searchIcon from "../../../assets/homePage/SearchIcon.png";

const RequestList = () => {
    return(
        <div className="requestList">
            <div className="list_wrapper">
                <Request /> 
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