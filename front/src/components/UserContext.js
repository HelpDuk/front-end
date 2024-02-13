import React, { useState, createContext, useContext } from 'react';
import profileImage from '../assets/image/user.png';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    


    const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNzA3MTc0MjkwLCJleHAiOjE3MDcxNzc4OTB9.Qsid8ZCJgDEuP3i9sxRBkqwPOMRsJXJ3k18m4g__b7Q"


    return (
        <UserContext.Provider value={{ ACCESS_TOKEN }}>
            {children}
        </UserContext.Provider>
    );
};