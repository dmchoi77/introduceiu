import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import worklist from '../worklist.json';
import useInfiniteScroll from '../hooks/useInfiniteScroll'

const Works: FunctionComponent = function () {

    const [list, setList] = useState(worklist);
    const history = useHistory();
    const { containerRef, items } = useInfiniteScroll(list)

    return (
        <div className="contents-container">
            <div className="contents-header">
                <img className="artist-name" src="img/iu_logo.png" alt="logo" style={{ filter: "invert(100%)" }} />
                <button className="cancel-button" onClick={() => { history.push('/') }}>
                    <img src="img/cancel.png" alt="cancel-button"></img>
                </button>
            </div>
            <h1 className="works-title">Works</h1>
            <div className="works-content" ref={containerRef}>
                {
                    items.map((data, index) =>
                        <div className="album-wrapper" key={index}>
                            <img className="album-art" src={`img/album/${index + 1}.jpeg`} alt="album-art" />
                            <div className="album-info">
                                <h2 className="album-title">{data.name}</h2>
                                <p className="album-release">{data.date}</p>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Works;