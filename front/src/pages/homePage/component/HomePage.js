import React from 'react';
import { useState } from "react";
import "./HomePage.css";
import dropdownUp from "../../../assets/homePage/up.png";
import dropdownDown from "../../../assets/homePage/down.png";
import Header from "./Header";
import Search from "./Search";
import Category from "./Category";
import RequestList from "./RequestList";

/*목 데이터*/
// const mockRequest = [
//     {
//         id: 0,
//         title: "프린트 해주실 분",
//         isSolved: false,
//         detail: "차관에서 만나요",
//         category: "프린트",
//         price: 2000,
//         img: {dropdownDown},
//     },
//     {
//         id: 1,
//         title: "커피 사다주실 분",
//         isSolved: false,
//         detail: "도서관에서 만나요",
//         category: "음식",
//         price: 2000,
//         img: {dropdownDown},
//     },
//     {
//         id: 3,
//         title: "같이 밥 먹으실 분",
//         isSolved: false,
//         detail: "학관에서 만나요",
//         category: "학교 안",
//         price: 2000,
//         img: {dropdownDown},
//     }
// ]

function HomePage() {
    const [request, setRequest] = useState(mockRequest);
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    return(
        <div className="homepage">
            <Header />

            <div className="middle">
                <aside>
                    <Search />

                    <button className="categoryButton" onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                        {
                            dropdownVisibility
                                ? <h4><img src={dropdownDown} /> 카테고리</h4>
                                : <h4><img src={dropdownUp} /> 카테고리</h4>
                        }
                    </button>
                    <Category visibility={dropdownVisibility} />
                </aside>

                <RequestList />
            </div>
            
        </div>
    );
}

export default HomePage;