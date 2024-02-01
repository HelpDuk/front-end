import React, { useState } from 'react';
import "../styles/RequestContent.css";
import upload from "../assets/image/upload.png";
import "./LocationTimeSelector.js";
import LocationTimeSelector from './LocationTimeSelector.js';

function FileUploader() {
    // 파일 상태
    const [file, setFile] = useState(null);

    // 파일 선택 핸들러
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    return (
        <div className="vertical-align-container">
            <LocationTimeSelector />
            <br />
            <div className='file-upload'>
                <div className="upload-wrapper">
                    <img src={upload} alt="upload" className="upload-image" />
                    <input className="submit" type="file" onChange={handleFileChange} />
                </div>
            </div>
        </div>
    );
}

export default FileUploader;