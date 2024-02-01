import React from 'react';
import "../styles/AlertBox.css";
import alertIcon from "../assets/image/alertIcon.png";

function AlertBox({ timestamp }) {
    return (
        <div className="alert-item">
            <div className="content-wrapper">
                <img src={alertIcon} alt="Alert Icon" className="alert-icon" />
                <span className='text'>리뷰가 등록되었어요</span>
                <span className='timestamp'>{timestamp}</span>
            </div>
        </div>
    );
}

export default AlertBox;