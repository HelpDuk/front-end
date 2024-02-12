import React, { useState, createContext, useContext } from 'react';
import profileImage from '../assets/image/user.png';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    
    const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzA3NzM2MDUxLCJleHAiOjE3MDc3Mzk2NTF9.1pOBrisGLShrmX3gWoNeKKjt9qZ5WH71sTaL6fmlepE'

    return (
        <UserContext.Provider value={{ ACCESS_TOKEN }}>
            {children}
        </UserContext.Provider>
    );
};