import './Category.css';
import React, { useState, useEffect } from 'react';

const Category = (props) => {
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);

  const [checkedItems, setCheckedItems] = useState({
    possibleRequests: false,
    myRequests: false,
    school: false,
    dorm: false,
    etc: false,
    print: false,
    food: false,
    partTimeJob: false,
    cleaning: false,
    evnetAssist: false,
    bug: false,
  });

  useEffect(() => {
    if (props.visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(setTimeout(() => {
        setVisibilityAnimation(false);
      }, 400));
    }
  }, [props.visibility]);

  const handleCheckboxChange = (itemName) => {
    setCheckedItems({
      ...checkedItems,
      [itemName]: !checkedItems[itemName],
    });
  };

  return (
    <article className={`category-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
      {visibilityAnimation && (
        <ul>
          <br />  

          <li>
            <h4>골라보기</h4>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkedItems.possibleRequests}
              onChange={() => handleCheckboxChange('possibleRequests')}
            />
            <label>거래가능글만</label>
          </li>  
          <li>
            <input
              type="checkbox"
              checked={checkedItems.myRequests}
              onChange={() => handleCheckboxChange('myRequests')}
            />
            <label>내 의뢰글만</label>
          </li>
          <br />

          <li>
            <h4>위치</h4>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkedItems.school}
              onChange={() => handleCheckboxChange('school')}
            />
            <label>학교 안</label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkedItems.dorm}
              onChange={() => handleCheckboxChange('dorm')}
            />
            <label>기숙사</label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkedItems.etc}
              onChange={() => handleCheckboxChange('etc')}
            />
            <label>기타</label>
          </li>
          <br />

          <li>
            <h4>세부 사항</h4>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkedItems.print}
              onChange={() => handleCheckboxChange('print')}
            />
            <label>프린트</label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkedItems.food}
              onChange={() => handleCheckboxChange('food')}
            />
            <label>음식</label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkedItems.partTimeJob}
              onChange={() => handleCheckboxChange('partTimeJob')}
            />
            <label>알바 대타</label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkedItems.cleaning}
              onChange={() => handleCheckboxChange('cleaning')}
            />
            <label>청소</label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkedItems.eventAssist}
              onChange={() => handleCheckboxChange('eventAssist')}
            />
            <label>행사 보조</label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={checkedItems.bug}
              onChange={() => handleCheckboxChange('bug')}
            />
            <label>벌레</label>
          </li>
          <br />
        </ul>
      )}
    </article>
  );
};

export default Category;
