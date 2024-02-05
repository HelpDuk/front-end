import { useNavigate } from 'react-router-dom';
import "./ReviewDetail.css";
import profileImage from '../../assets/image/user.png';

function ReviewDetail({ otherUserId, nickName, content }) {
    const navigate = useNavigate();

    const Goto = (otherUserId) => {
        navigate(`/otherpage/${otherUserId}`);
    }

    return (
        <div style={{padding: "20px"}}>
            <div key={otherUserId} className='detailList'>
                <div className="reviewUser">
                    <img className="userImg" alt="user" src={profileImage} onClick={() => Goto(otherUserId)} />
                    <h3>{nickName}</h3>
                </div>
                <small style={{fontSize: "1.1em", color: "black"}}>{content}</small>
            </div>

        </div>
    )
}

export default ReviewDetail;