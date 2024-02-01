import React, { useState } from 'react';
import "../styles/RequestContent.css";

function LocationTimeSelector() {
  // 위치와 시간을 선택할 상태
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');

  // 위치 선택 핸들러
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // 시간 선택 핸들러
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className='select-container'>
      <select value={location} onChange={handleLocationChange}>
        <option value="">위치</option>
        <option value="학교 안">학교 안</option>
        <option value="학교 밖">학교 밖</option>
        <option value="기타">기타</option>
      </select>
      <select value={time} onChange={handleTimeChange}>
        <option value="">시간</option>
        <option value="10분">10분</option>
        <option value="15분">15분</option>
        <option value="30분">30분</option>
        <option value="1시간">1시간</option>
        <option value="기타">기타</option>
      </select>
    </div>
  );
}

export default LocationTimeSelector;