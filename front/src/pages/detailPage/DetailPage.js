import "./DetailPage.css";
import DetailImg from "./DetailImg";
import Profile from "./Profile";
import DetailContents from "./DetailContents";

function DetailPage() { 
    return(
        <div className="detailpage">
            <div className="leftSide">
                <DetailImg />
                <Profile />
            </div>
            <div className="rightSide">
                <DetailContents />
            </div>
        </div>
    );
}

export default DetailPage;