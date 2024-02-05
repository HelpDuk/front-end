import { useNavigate } from "react-router-dom";
import defaultProfileImage from '../../assets/image/user.png';
import "../../styles/ProfileEdit.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from '../../components/UserContext';

function ProfileEdit() {
    const navigate = useNavigate();
    const [profileImg, setProfileImg] = useState(defaultProfileImage);
    const [nickname, setNickname] = useState("");
    const [isBlank, setIsBlank] = useState(false);
    const { ACCESS_TOKEN } = useUser();

    useEffect(() => {
        // 마이페이지 정보 불러오기
        axios.get('/api/mypage', {headers: {
            'X-AUTH-TOKEN': `${ACCESS_TOKEN}`
        }})
        .then(response => {
            const data = response.data;
            console.log(response);
                setNickname(data.nickName);
                setProfileImg(data.profileImage || defaultProfileImage);
            
        }).catch(error => {
            console.error("프로필 정보 불러오기 실패", error);
        });
    }, [ACCESS_TOKEN]);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImg(URL.createObjectURL(e.target.files[0]));
        }
    };

    const resetImage = () => {
        setProfileImg(defaultProfileImage);
        document.getElementById('fileInput').value = '';
    };

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
        setIsBlank(!e.target.value.trim());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nickname.trim()) {
            setIsBlank(true);
            return;
        }

        const formData = new FormData();
        formData.append('nickName', nickname);

        const fileInput = document.getElementById('fileInput');
        if (fileInput && fileInput.files[0]) {
            console.log(fileInput.files[0]);
        formData.append('profileImage', fileInput.files[0]);
        }
        // 폼 객체 key 와 value 값을 순회.
        let entries = formData.entries();
        for (const pair of entries) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        
        axios.post('/api/mypage/edit', formData, {
            headers: {
                'X-AUTH-TOKEN': `${ACCESS_TOKEN}`,
            },
        })
        .then(response => {
            console.log(response.data);
            alert('프로필 수정 완료');
            navigate('../Mypage');
        })
        .catch(error => {
            console.error('프로필 수정에 실패했습니다.', error);
            alert('프로필 수정에 실패했습니다.');
        });
    };

    return (
        <div className="profileEdit" style={{ padding: "40px" }}>
            <div className="editTitle">
                <h1>프로필 수정</h1>
                <button className="submitButton" onClick={handleSubmit}>
                    <h4>완료</h4>
                </button>
            </div>
            <div className="editInfo">
                <table style={{ marginBottom: "40px" }}>
                    <tbody>
                        <tr>
                            <td style={{ fontSize: "1.2em" }}>프로필 사진</td>
                            <td>
                                <div className="editImage">
                                    <img className="profile" alt="profile" src={profileImg} />
                                    <input type="file" onChange={handleImageChange} style={{ display: 'none' }} id="fileInput" accept="image/png, image/jpeg, image/gif" />
                                    <h4 className="profileButton" onClick={() => document.getElementById('fileInput').click()}>사진 변경</h4>
                                    <h4 className="profileButton" onClick={resetImage}>사진삭제</h4>
                                </div>
                            </td>
                        </tr>
                        <tr className="nickName">
                            <td style={{ fontSize: "1.2em" }}>닉네임</td>
                            <td>
                                <input
                                    placeholder="nickname"
                                    value={nickname}
                                    onChange={handleNicknameChange}
                                />
                                {isBlank && (<p style={{ fontSize: "0.8em", color: "red", paddingLeft: "75px" }}>빈칸은 입력할 수 없습니다.</p>)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProfileEdit;
