import "./DetailPage.css";
import SampleImage from '../../assets/detailPage/printer.png';
import Profile from "./Profile";
import DetailContents from "./DetailContents";

function DetailPage() { 
    return(
        <div className="detailpage">
            <div className="leftSide">
                <img src={SampleImage} alt="첨부이미지" />
                <Profile />
            </div>
            <div className="rightSide">
                <DetailContents />
            </div>
        </div>
    );
}

export default DetailPage;