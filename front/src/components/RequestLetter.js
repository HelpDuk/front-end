import React from "react";
import "../styles/RequestContent.css";

function RequestLetter() {
  return (
    <div>
      <button className="custom-button">등록하기</button>
      <div className="request-letter">
        <div className="title">
          <input type="text" placeholder="제목을 작성하세요." />
        </div>
        <div className="content">
          <textarea placeholder="의뢰 내용을 작성하세요." />
        </div>
      </div>
    </div>
  );
}

export default RequestLetter;