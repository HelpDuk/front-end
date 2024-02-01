import React from 'react';
import "../styles/AlertPage.css";
import AlertList from '../components/AlertList';

function AlertPage() {
    // 가짜 알림 데이터 (데이터 서버에서 받아와야 함)
    const fakeAlerts = [
      { timestamp: '2024-01-30 10:00' },
      { timestamp: '2024-01-30 12:00' },
      { timestamp: '2024-01-31 11:00' },
      { timestamp: '2024-01-31 12:30' },
    
    ];

    return (
      <div className="alert-container">
        <div className="alert-box">
          <h2>이전 알림</h2>
          <AlertList alerts={fakeAlerts} />
        </div>
      </div>
    );
  };

  export default AlertPage;