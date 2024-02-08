import "./WriteReview.css";
import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useNavigate, useParams  } from 'react-router-dom';
import reviewLog from "../../assets/image/부름부릉얼굴.png"
import Good from "../../assets/image/좋아요.png"
import Bad from "../../assets/image/별로예요.png"
import Great from "../../assets/image/최고예요.png"
import { useUser } from '../../components/UserContext';


function WriteReview ({roomId}) {
    const [review, setReview] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [reviewScore, setReviewScore] = useState("");
    const navigate = useNavigate();
    const { ACCESS_TOKEN } = useUser();

    const reviewChange = (e) => {
        setReview(e.target.value);
    }

    const handleImageClick = (score) => {
        console.log(score);
        setReviewScore(score);
        setSelectedImage(score);
    };

    const getSelectedClass = (score) => {
        return selectedImage === score ? "selected" : "";
    };


    const cancelClick = () => {
        const confirmcancel = window.confirm("후기 작성을 취소하시겠습니까?")

        if (confirmcancel){
            navigate('/mypage/myRequests');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (review && reviewScore) {
            const postData = {
                "roomId": "d1d31faa-062a-465a-8124-1abec2215b74",
                "score": parseInt(reviewScore, 10),
                "content": review,
            };
            console.log("점수 : ", {reviewScore});
            console.log("내용: ", {review});

            axios.post('/api/review', postData, {headers: {
                'X-AUTH-TOKEN': `${ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            }})
            .then((response) => {
                console.log(response.data);
                alert('후기 저장 완료');
                navigate('../mypage/myRequests');
            })
            .catch((error) => {
                console.log({postData});
                console.error('리뷰 저장에 실패했습니다.', error);
                alert('리뷰 저장에 실패했습니다.');
            });
    } else {
        alert('리뷰 내용과 점수를 모두 입력해주세요.');
        }
    };
    
    return (
        <div className="writeReview"  style={{padding: "20px"}}>
            <div className="reviewIntro">
                <img className="reviewlog" alt="reviewlog"src={reviewLog} />
                <h2>헬퍼와의 거래는 만족스러우셨나요? 사용자님의 후기를 남겨주세요!</h2>
            </div>
            <div className="reviewImg">
                <label>
                    <input
                    type="radio"
                    className="radioButton"
                    value={1}
                    checked={reviewScore===1}
                    onChange={handleImageClick}
                    />
                    <div className={`imgContainer ${getSelectedClass(1)}`} onClick={() => handleImageClick(1)}>
                        <img className="badImg" alt="bad" src={Bad} />
                        <h2>별로예요!</h2>
                    </div>
                </label>
                <label>
                    <input
                    type="radio"
                    className="radioButton"
                    value={2}
                    checked={reviewScore===2}
                    onChange={handleImageClick}
                    />
                    <div className={`imgContainer ${getSelectedClass(2)}`} onClick={() => handleImageClick(2)}>
                        <img className="goodImg" alt="good" src={Good} />
                        <h2>좋아요!</h2>
                    </div>
                </label>
                <label>
                    <input
                    type="radio"
                    className="radioButton"
                    value={3}
                    checked={reviewScore===3}
                    onChange={handleImageClick}
                    />
                    <div className={`imgContainer ${getSelectedClass(3)}`} onClick={() => handleImageClick(3)}>
                        <img className="greatImg" alt="great" src={Great} />
                        <h2>최고예요!</h2>
                    </div>
                </label>
            </div>
            <div className="writePage">
                <form>
                    <textarea 
                        value={review}
                        onChange={reviewChange}
                        cols="100"
                        rows="7"
                        placeholder="의뢰 후기를 작성해주세요!"
                    />
                    <div className="buttonStyle">
                        <button type="button" onClick={cancelClick} className="cancelButton" style={{backgroundColor: "white"}}>취소하기</button>
                        <button type="submit" onClick={handleSubmit} style={{backgroundColor: "#80BCBD"}}>등록하기</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WriteReview;