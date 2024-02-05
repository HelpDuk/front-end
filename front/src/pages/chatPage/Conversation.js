import "./Conversation.css"; 

function Conversation({allMessage, chatroomUser}) { 
    console.log("가져온 대화 내역: ", allMessage);
    return(
        <div className="speechBubble">
            {allMessage.map((message) => (
                <div className={`message ${1 === chatroomUser ? 'myMessage' : 'helperMessage'}`}>
                    <p>{message.content}</p>
                </div>
                ))}
        </div>
    );
}

export default Conversation;