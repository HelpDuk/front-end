import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUploader from '../components/FileUploader';
import PaymentBox from '../components/PaymentBox';
import RequestLetter from '../components/RequestLetter';
import "../styles/RequestFormPage.css";

function RequestFormPage() {
  const navigate = useNavigate(); 
  // const [imageSelected, setImageSelected] = useState(false);
  const [file, setFile] = useState(null);

  // 파일 선택 핸들러
  const handleFileChange = (file) => {
    setFile(file);
    
    // setImageSelected(!!file);  파일이 선택되었는지 여부에 따라 true 또는 false 설정
  };

  // 등록하기 버튼 클릭 시 실행되는 함수
  const handleRegister = () => {
    if (!file) {
      alert("이미지를 삽입해주세요.");
    } else {
      alert("의뢰글이 등록되었습니다.");
      navigate('/homepage');
    }
  };

  return (
    <div className="page-container">
      <div className="request-form-container">
        <FileUploader onFileChange={handleFileChange} />
        {/* onRegister prop을 전달 */}
        <RequestLetter onRegister={handleRegister} />
        <br />
      </div>
      <PaymentBox />
    </div>
  );
}

export default RequestFormPage;

