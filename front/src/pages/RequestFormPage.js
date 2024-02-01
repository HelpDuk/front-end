import React from 'react';
import FileUploader from '../components/FileUploader';
import PaymentBox from '../components/PaymentBox';
import RequestLetter from '../components/RequestLetter';
import "../styles/RequestFormPage.css";

function RequestFormPage() {
  return (
    <div className="page-container">
      <div className="request-form-container">
        <FileUploader />
        <RequestLetter />
        <br />
      </div>
      <PaymentBox />
    </div>
  );
}

export default RequestFormPage;
