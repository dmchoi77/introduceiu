import React from 'react';
import { useHistory } from 'react-router-dom';

const Profile: React.FC = () => {
    const history = useHistory();

    return (
        <div className="contents-container">
            <div className="contents-header">
                <img className="artist-name" src="img/iu_logo.png" style={{ filter: "invert(100%)" }} alt="logo" />
                <button className="cancel-button" onClick={(): void => { history.push('/') }}>
                    <img src="img/cancel.png" alt="cancel-button"></img>
                </button>
            </div>
            <h1 className="profile-title">Profile</h1>
            <div className="profile-content">
                <img src="img/iu_1.jpeg" alt="profile" ></img>
                <ul>
                    <h3>IU (이지은)</h3>
                    <li>가수, 탤런트</li>
                    <h3>생년월일</h3>
                    <li>1993년 5월 16일</li>
                    <h3>소속사</h3>
                    <li>EDAM ENT.</li>
                    <h3>데뷔</h3>
                    <li>2008년 9월 미니 1집 Lost And Found [미아]</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;