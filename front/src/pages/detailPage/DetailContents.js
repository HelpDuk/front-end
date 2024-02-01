import "./DetailContents.css";
// import StateDropDown from "./StateDropDown";

function DetailContents() { 
    return(
        <div className="detailcontents">
            <div className="userInput">
                <div className="firstLine">
                    <h3>프린트 20장만 부탁드려요.</h3>
                </div>
                <div className="secondLine">
                    <h5>카테고리</h5>
                    <small>날짜</small>
                </div>
                <div className="thirdLine">
                    <h4>가격</h4>
                    <h6>계좌 이체</h6>
                    <h5>심부름비: </h5>
                    <h4>300원</h4>
                    <h6>심부름 전 계좌이체</h6>
                </div>
                <div className="deadLine">
                    <h6>마감 기한</h6>
                </div>
                <div className="explanation">
                    <p>상세 설명</p>
                </div>
                <div className="chatCount">
                    <small>채팅 개수</small>
                </div>
            </div>

            <div className="others">
                <h5>거래완료</h5>
                <select>
                    <option value="option1">거래 전</option>
                    <option value="option2">예약 중</option>
                    <option value="option3">거래 완료</option>
                </select>
                <button>채팅하기</button>
            </div>
        </div>
    );
}

export default DetailContents;