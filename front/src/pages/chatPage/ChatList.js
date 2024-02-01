import "./ChatList.css";
import ChatRoom from "./ChatRoom";

function ChatList() { 
    return(
        <div className="chatlist">
            <div className="chatListNav">
                <h3>Message</h3>
            </div>
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
            <ChatRoom />
        </div>
    );
}

export default ChatList;