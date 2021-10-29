import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Works from './pages/Works';
import Photo from './pages/Photo';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* 컨테이너 */}
      <Route exact path="/works" component={Works} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/photo" component={Photo} />
      <div className="Container">
        <div className="main_bkbg" />
        {/* 유튜브배경 */}
        <div className="youtube-background">
          <iframe src="https://www.youtube.com/embed/v7bnOxV4jAc?start=125&autoplay=1&amp;playlist=v7bnOxV4jAc&amp;mute=1&amp;loop=1" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <Header />
        <Content />
        <Footer />
      </div>
    </div >
  );
}

export default App;
