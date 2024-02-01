import "./ChatPage.css"; 
import ChatList from "./ChatList";
import ChatDetail from "./ChatDetail";

function ChatPage() { 
    return(
        <div className="chatpage">
            <ChatList />
            <ChatDetail />
        </div>
    );
}

export default ChatPage;