import "./ChatDetail.css";
import Conversation from "./Conversation";
import {Link} from "react-router-dom";
import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRoomId } from "../../components/RoomIDContext";
import axios from 'axios';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { useUser } from "../../components/UserContext";

function ChatDetail() { 
    //let ACCESS_TOKEN = localStorage.getItem("accessToken");
    const { ACCESS_TOKEN } = useUser();

    const [chatroom, setChatroom] = useState({});
    const { roomId } = useParams();
    //const { roomId } = useRoomId();
    //console.log("방아이디",roomId);
    const [sendButtonClicked, setSendButtonClicked] = useState(false); //전송 버튼 눌렸는지 나타냄(그 때마다 대화 내역 불러오도록)

    const [stompClient, setStompClient] = useState(null);
    const [socket, setSocket] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    //const [roomId, setRoomId] = useState(ContextroomId);  
    const [messages, setMessages] = useState([]);  
    const [sender, setSender] = useState('');  
    
    
    useEffect(() => {
        const socket = new SockJS("/ws/chat");
        const stompClient = Stomp.over(socket);
        
        setSocket(socket);
        setStompClient(stompClient);

        stompClient.connect({}, (frame) => {
            console.log("connected!!");
            stompClient.subscribe(`/topic/chat/room/${roomId}`, (message) => {
                const recv = JSON.parse(message.body);
                setMessages(prevMessages => [
                    { "type": recv.type, "sender": recv.type === 'ENTER' ? '[알림]' : recv.sender, "content": recv.content },
                    ...prevMessages
                ]);
            });
        });
    }, [roomId]);

    const handleSendMessage = () => {
        if (stompClient && stompClient.connected && messageInput.trim() !== '' && chatroom.userId) {
            console.log("채팅방 정보-userId: ", chatroom['userId']); 
            stompClient.send('/app/chat/message', {}, JSON.stringify({
                type: 'TALK',  
                roomId:roomId,
                content: messageInput,
                //sendTime
                senderId: chatroom.userId,
            }));

            setMessageInput('');
            setSendButtonClicked(!sendButtonClicked); // 버튼 클릭 시 상태 변경  
        }
    };
    const DoneButton = () => {
        //axios를 이용하여 거래 완료 상태로 put
        const StatusChange = async () => {
            console.log("거래 완료 상태로 put:",chatroom.taskId);
            try {
              const response = await axios.put(
                `http://localhost:3000/api/task/${chatroom.taskId}`,
                { taskStatus: "거래 완료" },
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'X-AUTH-TOKEN': `${ACCESS_TOKEN}`,
                  },
                }
              );
              console.log("put한 거래 상태:", response.data);
            } catch (error) {
              console.error('상태 변화 API 호출 오류:', error);
            }
          };
        StatusChange();    
    }

    // useEffect를 이용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정
    useEffect(() => {
        // axios를 통해 채팅방 정보 get
        const ChatRoomData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/chat/room/${roomId}`, {
                    headers: {
                        'X-AUTH-TOKEN': `${ACCESS_TOKEN}`,  // 여기에 토큰 값을 넣어주세요
                    },
                });
    
                // 받아온 데이터를 상태에 저장
                setChatroom(response.data);
                console.log("채팅방 정보:", response.data);
               
            } catch (error) {
                console.error('API 호출 오류:', error);
            }
        };
        ChatRoomData();
      }, []);


    const [allMessage, setAllMessage] = useState([]);

    // useEffect를 이용하여 컴포넌트가 마운트될 때와 새 메시지 전송될 때만 실행되도록 설정
    useEffect(() => {
        // axios를 통해 특정 채팅방의 대화 내역 get
        const AllMessageData = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3000/chat/getAllMessages',
                    {
                        params:{roomId:roomId},
                        headers: {
                        'X-AUTH-TOKEN': `${ACCESS_TOKEN}`,// 여기에 토큰 값을 넣어주세요
                    },
                    }
                );
                setAllMessage(response.data);
                console.log("가져온 대화 내역: ", response.data);
            } catch (error) {
                console.error('API 호출 오류:', error);
            } 
        };
        AllMessageData();
    });
    

    return(
        <div className="chatdetail">
            <div className="header">
                    <div className="chatDetailProfile">
                    {chatroom.helper && (
                    <>
                        <img src={chatroom.helper.profileImage} alt="Helper Profile" />
                        <h5>{chatroom.helper.nickName}</h5>
                    </>
                    )}
                </div>
                    <Link to={`../writeReview/${chatroom.roomId}`}>
                        <button className="requestFormButton" onClick={DoneButton}>거래완료</button>
                    </Link>
            </div>

            <div className="contents">
                <div className="conversation">
                {chatroom.userId && (
                    <>
                        <Conversation allMessage={allMessage} chatroomUser={chatroom.userId}/>
                    </>
                    )}
                </div>
                <div className="sendBar">
                    <input className="writeMessage" value={messageInput} onChange={(e) => setMessageInput(e.target.value)}/>
                    <button className="sendButton" onClick={handleSendMessage}>전송</button>
                </div>
            </div>
        </div>
    );
}

export default ChatDetail;