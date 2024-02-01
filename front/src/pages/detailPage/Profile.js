import "./Profile.css";
import ProfileImg from '../../assets/detailPage/profileImg.png';
import { useUser } from '../../components/UserContext';
import Temperature from "../../components/Temperature";

function Profile() {
    const { userTemperature } = useUser();

    return(
        <div className="profile">
            <div className="profile-contents">
                <img src={ProfileImg} />
                <h4>닉네임</h4>
                <Temperature userTemperature={userTemperature} />
            </div>
        </div>
    );
}

export default Profile;