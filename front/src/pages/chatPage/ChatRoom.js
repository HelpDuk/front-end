import "./ChatRoom.css";
import { useNavigate } from 'react-router-dom';
import { useRoomId } from "../../components/RoomIDContext";

function ChatRoom({chat}) {
    const { setRoomId } = useRoomId();

    const navigate = useNavigate();

    const goToChatRoom = (roomId) => {
        setRoomId(roomId);
        navigate(`/chatPage/${roomId}`);
    }

    return(
        <div className="chatrooms"> 
                {chat.map((chat) => (
                    <div className="chatroom">
                            <button className="chatroomButton" key={chat.roomId} onClick={() => goToChatRoom(chat.roomId)}>
                                <div className="chatprofile">
                                    <img src={chat.helper.profileImage} />
                                </div>
                                <div className="chatroomInfo">
                                    <div className="userName">
                                        <h3>{chat.helper.nickName}</h3>
                                    </div>
                                    <div className="recentChat">
                                        <p>{chat.lastContent}</p>
                                    </div>
                                </div>
                            </button>
                    </div>
                ))} 
        </div>
    );
}

export default ChatRoom;