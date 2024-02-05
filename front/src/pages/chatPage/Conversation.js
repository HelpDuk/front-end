import "./Conversation.css"; 

function Conversation({allMessage}) { 
    //console.log("가져온 대화 내역: ", allMessage);
    return(
        <div className="speechBubble">
            {allMessage.map((message) => (
                    <div className="message">
                            <p>{message.content}</p>
                    </div>
                ))}
        </div>
    );
}

export default Conversation;