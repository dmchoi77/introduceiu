import React from 'react'
import { useHistory } from 'react-router-dom';
import Slide from '../components/Slide'

const Photo: React.FC = () => {
    const history = useHistory();

    return (
        <div className="contents-container">
            <div className="contents-header">
                <img className="artist-name" src="img/iu_logo.png" style={{ filter: "invert(100%)" }} />
                <button className="cancel-button" onClick={(): void => { history.push('/') }}>
                    <img src="img/cancel.png" />
                </button>
            </div>
            <h1 className="profile-title">Photo</h1>
            <Slide />



        </div >
    )
}

export default Photo;
