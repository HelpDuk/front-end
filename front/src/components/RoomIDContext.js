import React, { useState, createContext, useContext } from 'react';

const RoomIdContext = createContext();

export const useRoomId = () => useContext(RoomIdContext);

export const RoomIdProvider = ({ children }) => {
    const [roomId, setRoomId ] = useState("");

    return (
        <RoomIdContext.Provider value={{roomId, setRoomId}}>
            {children}
        </RoomIdContext.Provider>
    );
};