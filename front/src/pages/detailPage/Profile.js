import "./Profile.css";
import ProfileImg from '../../assets/detailPage/profileImg.png';

function Profile() {
    return(
        <div className="profile">
            <div className="profile-contents">
                <img src={ProfileImg} />
                <h4>닉네임</h4>
                <h5>(온도바 컴포넌트)</h5>
            </div>
        </div>
    );
}

export default Profile;