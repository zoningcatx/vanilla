import logo from './assets/logo.png';
import vid1 from './assets/1.png';
import vid2 from './assets/2.png';
import vid3 from './assets/3.png';
import vid4 from './assets/4.png';
import vid5 from './assets/5.png';
import vid6 from './assets/6.png';
import vid7 from './assets/7.png';
import vid8 from './assets/8.png';
import vid9 from './assets/9.png';
import vid10 from './assets/10.png';
import vid11 from './assets/11.png';
import vid12 from './assets/12.png';
import tg from './assets/tg.svg';
import tw from './assets/tw.svg';
import banner from './assets/banner.png';
import judge from './assets/judge.png'
import React, {useState} from 'react';
import Overlay from './components/Overlay';
import './App.css';

function App() {
  const contract = "TBA"; 
  const tgLink = "https://t.me/cathubsol";
  const twLink = "https://twitter.com/VanillaCatSol";
  const [popupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="App">
      <Overlay/>
      <div className="layout">
        <div className="logoBlock">
          <img alt="logo" src={logo} className="logo" />
        </div>
        <div className="details">
            <div className="contractBlock">
              <h5 className="contract">CA: {contract}</h5>
            </div>
            <div className="socialBlock">
              <a href={tgLink}><img alt="telegram" src={tg}/></a>
              <a href={twLink}><img alt="twitter" src={tw}/></a>
            </div>
          </div>
          <div className="mobMainBlock">
              <img alt="vid1" className="vidImg" src={vid1} onClick={showPopup}/>
              <img alt="vid2" className="vidImg" src={vid2} onClick={showPopup}/>
              <img alt="vid3" className="vidImg" src={vid3} onClick={showPopup}/>
              <img alt="vid4" className="vidImg" src={vid4} onClick={showPopup}/>
              <img alt="vid5" className="vidImg" src={vid5} onClick={showPopup}/>
              <img alt="vid6" className="vidImg" src={vid6} onClick={showPopup}/>
              <img alt="vid7" className="vidImg" src={vid7} onClick={showPopup}/>
              <img alt="vid8" className="vidImg" src={vid8} onClick={showPopup}/>
              <img alt="vid9" className="vidImg" src={vid9} onClick={showPopup}/>
              <img alt="vid10" className="vidImg" src={vid10} onClick={showPopup}/>
              <img alt="vid11" className="vidImg" src={vid11} onClick={showPopup}/>
              <img alt="vid12" className="vidImg" src={vid12} onClick={showPopup}/>
          </div>
          <div className="mainBlock">
            <div className="row">
              <img alt="vid1" className="vidImg" src={vid1} onClick={showPopup}/>
              <img alt="vid2" className="vidImg" src={vid2} onClick={showPopup}/>
              <img alt="vid3" className="vidImg" src={vid3} onClick={showPopup}/>
              <img alt="vid4" className="vidImg" src={vid4} onClick={showPopup}/>
            </div>
            <div className="row">
              <img alt="vid5" className="vidImg" src={vid5} onClick={showPopup}/>
              <img alt="vid6" className="vidImg" src={vid6} onClick={showPopup}/>
              <img alt="vid7" className="vidImg" src={vid7} onClick={showPopup}/>
              <img alt="vid8" className="vidImg" src={vid8} onClick={showPopup}/>
            </div>
            <div className="row">
              <img alt="vid9" className="vidImg" src={vid9} onClick={showPopup}/>
              <img alt="vid10" className="vidImg" src={vid10} onClick={showPopup}/>
              <img alt="vid11" className="vidImg" src={vid11} onClick={showPopup}/>
              <img alt="vid12" className="vidImg" src={vid12} onClick={showPopup}/>
            </div>
            <div className="bannerBlock">
              <img alt="banner" className="banner" src={banner}/>
            </div>
          </div>
          {popupVisible && (
            <div className="popup">
              <div className="popup-content">
                <div>
                <img alt="judge" src={judge}/>
                </div>
                <button className="popup-button" onClick={hidePopup}>
                  OK
                </button>
              </div>
            </div>
          )}
          <div className="pages">
            <div className="pageSelector">
              <h5>1</h5>
            </div>
            <div className="pageSelector">
              <h5>2</h5>
            </div>
            <div className="pageSelector">
              <h5>3</h5>
            </div>
            <div className="pageSelector">
              <h5>4</h5>
            </div>
            <div className="pageSelector">
              <h5>5</h5>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
