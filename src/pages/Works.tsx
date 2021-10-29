import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import worklist from '../worklist.json';

function Works(): JSX.Element {

    const [list, setList] = useState(worklist);
    const history = useHistory();

    const content = list.map((data, i) =>
        <div className="album-wrapper">
            <img className="album-art" key={i} src={`img/album/${i + 1}.jpeg`} alt="album-art" />
            <div className="album-info">
                <h2 className="album-title">{data.name}</h2>
                <p className="album-release">{data.date}</p>
            </div>
        </div>
    );

    return (
        <div className="contents-container">
            <div className="contents-header">
                <img className="artist-name" src="img/iu_logo.png" alt="logo" style={{ filter: "invert(100%)" }} />
                <button className="cancel-button" onClick={() => { history.push('/') }}>
                    <img src="img/cancel.png" alt="cancel-button"></img>
                </button>
            </div>
            <h1 className="works-title">Works</h1>
            <div className="works-content">
                {content}
            </div>
        </div>
    )
}

export default Works;