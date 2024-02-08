import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fullheart from '../../assets/image/하트.png';
import "./HelperList.css";
import defaultProfileImage from '../../assets/image/user.png';
import { useUser } from '../../components/UserContext';

function HelperList() {
    const [likeUsers, setLikeUsers] = useState([]);
    const { ACCESS_TOKEN } = useUser();

    useEffect(() => {
        GetLikedUser();
    }, []);
    
    // // let ACCESS_TOKEN = localStorage.getItem("accessToken");
    // let ACCESS_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzA3MDczMTU0LCJleHAiOjE3MDcwNzY3NTR9.9fAEZiDgpHj08WjnOISBpBZ2_nDxtQaolMbvp4VCwfA`;

    const GetLikedUser = () => {
        axios.get('/api/mypage/like', {headers: {
            'X-AUTH-TOKEN': `${ACCESS_TOKEN}`
        }})
            .then((response) => {
                console.log("h", response.data.likedUserList);
                if (Array.isArray(response.data.likedUserList)) {
                    setLikeUsers(response.data.likedUserList);
                } else {
                    console.error("유저 없음", typeof response.data);
                    setLikeUsers([]);
                }
            })        
            .catch((error) => {
                console.error("관심 목록을 불러오는데 실패했습니다.", error);
            });
    };

    const handleRemoveFromLikes = (userId) => {
        axios.delete('/api/like/delete', { data: { likeUserId: userId } })
            .then(() => {
                setLikeUsers(likeUsers.filter(user => user.userId !== userId));
            })
            .catch((error) => {
                console.error("관심 목록 삭제에 실패했습니다.", error);
            });
    };


    return (
        <div style={{padding: "20px"}}>
            <h1 className="editTitle" style={{paddingBottom: "30px"}}>관심 목록</h1>
            {likeUsers.map((likeUser, index) => {
            const user = likeUser.likeUserId; 
            
            return (
                <div key={index} className='helperList'>
                    <img alt="heart" src={fullheart} onClick={() => handleRemoveFromLikes(user.userId)} />
                    <img className="userImg" alt="user" src={user.profileImage || defaultProfileImage} />
                    <h1>{user.nickName}</h1>
                </div>
            )
        })}
        </div>
    )
}

export default HelperList;