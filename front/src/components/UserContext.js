import React, { useState, createContext, useContext } from 'react';
import profileImage from '../assets/image/user.png';

// const mockUser = [
//     {
//         "userId": 1,
//         "userEmail": "test7@duksung.ac.kr",
//         "nickName": "미뇽",
//         "temperature": "36.5",
//         "profileImage": null,
//         "success": true,
//         "code": 0,
//         "msg": "Success"
//     },
//     {
//         "userId": 2,
//         "userEmail": "fdf55@dsfdf",
//         "nickName": "도담",
//         "temperature": "36.5",
//         "profileImage": null,
//         "success": true,
//         "code": 0,
//         "msg": "Success"
//     },
//     {
//         "userId": 3,
//         "userEmail": "hhtht@fdfs",
//         "nickName": "니니",
//         "temperature": "36.5",
//         "profileImage": null,
//         "success": true,
//         "code": 0,
//         "msg": "Success"
//     },
// ]

// const mockReview = [
//     {
//         "reviewCnt": 1,
//         "reviewDtoList": [
//             {
//                 "userId": 1,
//                 "profileImage": "https://helpd3.ap20.png",
//                 "nickName": "미뇽",
//                 "content": "너무 친절하셨어요"
//             }
//         ]
//     },
//     {
//         "reviewCnt": 2,
//         "reviewDtoList": [
//             {
//                 "userId": 2,
//                 "profileImage": "https://helpd3.ap20.png",
//                 "nickName": "도담",
//                 "content": "너무 좋아요"
//             }
//         ]
//     },
//     {
//         "reviewCnt": 3,
//         "reviewDtoList": [
//             {
//                 "userId": 3,
//                 "profileImage": "https://helpd3.ap20.png",
//                 "nickName": "니니",
//                 "content": "굿굿"
//             }
//         ]
//     }
// ]

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    // const [userImage, setUserImage] = useState(profileImage);
    // const [nickname, setNickname] = useState('User');
    // const [userTemperature, setUserTemperature] = useState(90);
    // const [userData, setUserData] = useState(mockUser);
    // const [reviewData, setReviewData] = useState(mockReview);

    // const [likeUserId, setlikeUserId] = useState([]);
    // const addLikeUser = (userId) => {
    //     if (!likeUserId.includes(userId)) {
    //         setlikeUserId([...likeUserId, userId]);
    //     }
    // };

    // const removeLikeUserId = (userId) => {
    //     setlikeUserId(likeUserId.filter(id => id !== userId));
    // };
    
    const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzA3MTM1NzMxLCJleHAiOjE3MDcxMzkzMzF9.rpK3roWpi3L9HJuoIqIk8TljE-VQLHCUJ5BJiKNaAK4'

    return (
        <UserContext.Provider value={{ ACCESS_TOKEN }}>
            {children}
        </UserContext.Provider>
    );
};