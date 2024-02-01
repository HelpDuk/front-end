import "./ChatDetail.css";
import {Link} from "react-router-dom";
import ProfileImg from "../../assets/chatPage/profileImg.png";

function ChatDetail() { 
    return(
        <div className="chatdetail">
            <div className="header">
                <div className="chatDetailProfile">
                    <img src={ProfileImg} />
                    <h5>닉네임</h5>
                </div>
                <div className="requestFormButton">
                    <Link to={"/writeReview"}>
                        <h4>거래완료</h4>
                    </Link>
                </div>
            </div>

            <div className="contents">
                <div className="conversation">

                </div>
                <div className="sendBar">
                    <input className="writeMessage" />
                    <button className="sendButton">전송</button>
                </div>
            </div>
        </div>
    );
}

export default ChatDetail;