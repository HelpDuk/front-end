import React, { useState, createContext, useContext } from 'react';
import profileImage from '../assets/image/user.png';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    
    const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzA3MTY4MDY0LCJleHAiOjE3MDcxNzE2NjR9.VREMp2JLbFXy5-vuYg7FYXzuJXMtGBROC_EqTXwtpQE'

    return (
        <UserContext.Provider value={{ ACCESS_TOKEN }}>
            {children}
        </UserContext.Provider>
    );
};