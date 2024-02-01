import "./ChatDetail.css";
import ChatDetailDefault from "./ChatDetailDefault";
import ProfileImg from "../../assets/chatPage/profileImg.png";

function ChatDetail() { 
    return(
        <div className="chatdetail">
            <div className="header">
                <div className="profile">
                    <img src={ProfileImg} />
                    <h5>닉네임</h5>
                </div>
                <button className="DoneButton">거래 완료</button>
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