import React, { useState, useEffect } from 'react';
import "./ChatList.css";
import ChatRoom from "./ChatRoom";
import axios from 'axios';
import { useUser } from "../../components/UserContext";

function ChatList() { 
    const [chatrooms, setChatrooms] = useState([]);

    //let ACCESS_TOKEN = localStorage.getItem("accessToken");
    const { ACCESS_TOKEN } = useUser();

    // useEffect를 이용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정
    useEffect(() => {
        // axios를 통해 채팅방 목록 get
      const findAllRoom =  async () => {
          try {
              const response = await axios.get(
                'http://localhost:3000/chat/rooms',
                {
                  headers: {
                    'X-AUTH-TOKEN': `${ACCESS_TOKEN}`,// 여기에 토큰 값을 넣어주세요
                  },
                }
              );
      
              // 받아온 데이터를 상태에 저장
              setChatrooms(response.data);
              console.log(response.data);
            } catch (error) {
              console.error('API 호출 오류:', error);
          }
      };
  
      findAllRoom();
  
      }, );

    return(
        <div className="chatlist">
            <div className="chatListNav">
                <h3>Message</h3>
            </div>
            <ChatRoom chat={chatrooms}/>
        </div>
    );
}

export default ChatList;