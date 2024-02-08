import React, { useState, createContext, useContext } from 'react';
import profileImage from '../assets/image/user.png';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    
    const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzA3MzY2NDgxLCJleHAiOjE3MDczNzAwODF9.ygCvIyZLckPA1qFNTICd-sBfJ560U_g8eejbSgeg18g'

    return (
        <UserContext.Provider value={{ ACCESS_TOKEN }}>
            {children}
        </UserContext.Provider>
    );
};