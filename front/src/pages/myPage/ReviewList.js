import ReviewDetail from './ReviewDetail';
import "./ReviewList.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useUser } from '../../components/UserContext';
import defaultProfileImage from '../../assets/image/user.png';

function ReviewList() {

    const [reviewDate, setReviewData] = useState({ reviewDtoList: [] });
    const { ACCESS_TOKEN } = useUser();


    useEffect(() => {
        GetReview();
    }, []);

    const GetReview = () => {
        axios.get('/api/mypage/review', {headers: {
            'X-AUTH-TOKEN': `${ACCESS_TOKEN}`
        }})
            .then((response) => {
                console.log(response.data);
                setReviewData(response.data);
            })  
            .catch((error) => {
                console.error("리뷰 데이터를 불러오는데 실패했습니다.", error);
            });
    };
    

    return (
        <div className="reviewList"  style={{padding: "20px"}}>
            <h1 className="editTitle">의뢰 후기 상세</h1>
            <h2 style={{padding: "50px 0 0 20px", fontSize: "24px"}}>후기 {reviewDate.reviewCnt || 0}개</h2>
            <div className="reviewDetail">
            {reviewDate.reviewDtoList.map((review) => (
            <div>
                <ReviewDetail userId={review.userId} nickName={review.nickName} content={review.content} profileImage={review.profileImage || defaultProfileImage} />
            </div>
            ))}</div>
        </div>
    )
}

export default ReviewList;