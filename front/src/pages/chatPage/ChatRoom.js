import "./ChatRoom.css";
import ProfileImg from "../../assets/chatPage/profileImg.png";

function ChatRoom() { 
    return(
        <div className="chatroom">
            <button className="chatroomButton">
            <div className="profile">
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
        </div>
    );
}

export default ChatRoom;