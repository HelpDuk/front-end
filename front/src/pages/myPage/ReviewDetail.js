import { useNavigate } from 'react-router-dom';
import "./ReviewDetail.css";

function ReviewDetail({ userId, nickName, content, profileImage }) {
    const navigate = useNavigate();

    const Goto = (userId) => {
        navigate(`/otherpage/${userId}`);
    }

    return (
        <div style={{padding: "20px"}}>
            <div key={userId} className='detailList'>
                <div className="reviewUser">
                    <img className="userImg" alt="user" src={profileImage} onClick={() => Goto(userId)} />
                    <h3>{nickName}</h3>
                </div>
                <small style={{fontSize: "1.1em", color: "black"}}>{content}</small>
            </div>

        </div>
    )
}

export default ReviewDetail;