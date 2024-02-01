import React, { useState } from 'react';
import "../styles/RequestContent.css";
import camera from "../assets/image/camera.png";
import "./LocationTimeSelector.js";
import LocationTimeSelector from './LocationTimeSelector.js';

function FileUploader() {
    // 파일 상태
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // 파일 선택 핸들러
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        // 이미지 파일인지 확인
        if (selectedFile && selectedFile.type.includes('image')) {
            setFile(selectedFile);
            setErrorMessage('');
        } else {
            setFile(null);
            setErrorMessage('이미지 파일만 선택해주세요.');
        }
    };

    return (
        <div className="vertical-align-container">
            <LocationTimeSelector />
            <br />
            <div className='file-upload'>
                <div className="upload-wrapper">
                    <img src={camera} alt="camera" className="camera" />
                    <input className="submit" type="file" accept="image/png, image/jpeg, image/gif" onChange={handleFileChange} />
                </div>
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
}

export default FileUploader;