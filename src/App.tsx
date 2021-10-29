import './App.css';
import { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';
import Works from './Works';

function App(): JSX.Element {

  const [toggle, setToggle] = useState<null | Boolean>(null);

  const toggleMenu = (): void => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      {/* 컨테이너 */}
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/works" component={Works} />
      <Route exact path="/profile" component={Profile} />

      <div className="Container">
        <div className="main_bkbg" />
        {/* 유튜브배경 */}
        <div className="youtube-background">
          <iframe src="https://www.youtube.com/embed/v7bnOxV4jAc?start=125&autoplay=1&amp;playlist=v7bnOxV4jAc&amp;mute=1&amp;loop=1" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        {/* 헤더 */}
        <div className="header">
          <img className="artist-name" src="img/iu_logo.png" />
          <button className="menu-button" onClick={toggleMenu}>
            <img src="img/menu.png" />
          </button>
        </div>
        {//toggle
          <div className="side-nav">
            {
              toggle === null ?
                null :
                <nav className={toggle ? "show-side-nav" : "hide-side-nav"}>

                  <ul className="menu">
                    <Link to={"/profile"}>
                      <li>Profile</li>
                    </Link>
                    <Link to={"/works"}>
                      <li>Works</li>
                    </Link>
                    <Link to={"/photo"}>
                      <li>Photo</li>
                    </Link>
                  </ul>
                </nav>
            }
          </div>
        }
        {/* left content */}
        <div className="left-content">

          <div className="album-name">
            <a>IU 5th Album 'LILAC'</a>
            <hr style={{ margin: "0" }} />
          </div>
          <div className="main-title">
            <a>라일락</a>
          </div>
          <div className="main-title">
            <a>Coin</a>
          </div>
          <div className="main-title">
            <a>Celebrity</a>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footer">
        <img src="img/twitter.png"></img>
        <img src="img/facebook.png"></img>
        <img src="img/instagram.png"></img>
      </div>
    </div>


  );
}

export default App;
