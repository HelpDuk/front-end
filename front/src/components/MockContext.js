import React, { useState, createContext, useContext } from 'react';

const mockRequest = [
    {
        taskId: 0,
        title: "프린트 해주실 분",
        isSolved: false,
        detail: "차관에서 만나요",
        taskStatus: "거래 완료",
        category: "프린트",
        content: "학교 앞으로 와주세요.",
        uploadDate: "2024-01-30 15:28:41",
        price: 3000,
    },
    {
        taskId: 1,
        title: "커피 사다주실 분",
        isSolved: false,
        detail: "도서관에서 만나요",
        taskStatus: "거래 전",
        category: "음식",
        content: "빠르신 분만!",
        uploadDate: "2024-01-30 15:28:41",
        requestFee: 2000,
    },
    {
        taskId: 3,
        title: "같이 밥 먹으실 분",
        isSolved: false,
        detail: "학관에서 만나요",
        taskStatus: "거래 완료",
        category: "학교 안",
        content: "학교 앞으로 와주세요.",
        uploadDate: "2024-01-30 15:28:41",
        requestFee: 1000,
    }
  ]

const MockContext = createContext();

export const useMock = () => useContext(MockContext);

export const MockProvider = ({children}) => {
    const [mockDate, setMockDate] = useState(mockRequest);

    return (
        <MockContext.Provider value={{mockDate, setMockDate}}>
            {children}
        </MockContext.Provider>
    )
}