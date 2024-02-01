import "./ChatRoom.css";
import ProfileImg from "../../assets/chatPage/profileImg.png";
import {Link} from "react-router-dom";

function ChatRoom() { 
    return(
        <div className="chatroom">
            <Link to={"/writeReview"}>
                <button className="chatroomButton">
                <div className="chatprofile">
                    <img src={ProfileImg} />
                </div>
                <div className="chatroomInfo">
                    <div className="userName">
                        <h5>닉네임</h5>
                    </div>
                    <div className="recentChat">
                        <p>최근 대화 내용 최근 대화 내용 최근 대화 내용</p>
                    </div>
                </div>
                </button>
            </Link>   
        </div>
    );
}

export default ChatRoom;