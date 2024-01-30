import "./Request.css";
import sampleImg from "../../../assets/homePage/sample.png";

function Request() {
    return(
        <div className="request">
            <div className="contents">
                <div className="title">
                    <h2>프린트 해주실 분</h2>
                    <div className="isSolved">거래 완료</div>
                </div>

                <div className="detail">내용</div>

                <div className="category">카테고리</div>
            </div>
            
            <div className="price"><h2>2000원</h2></div>
            <div className="img"><img src={sampleImg}/></div>
        </div>
    );
}

export default Request;