import React from 'react';
import "./HomePage.css";
import dropdownUp from "../../../assets/homePage/up.png";
import dropdownDown from "../../../assets/homePage/down.png";
import Header from "./Header";
import Search from "./Search";
import Category from "./Category";
import RequestList from "./RequestList";

function HomePage() {
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