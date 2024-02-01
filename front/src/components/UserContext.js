import React, { useState, createContext, useContext } from 'react';
import profileImage from '../assets/image/user.png';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [userImage, setUserImage] = useState(profileImage);
    const [nickname, setNickname] = useState('User');

    return (
        <UserContext.Provider value={{ userImage, setUserImage, nickname, setNickname }}>
            {children}
        </UserContext.Provider>
    );
};