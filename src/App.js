import './App.css';
import logo from "./assets/logo.png"
import oreo from "./assets/oreo.png"
import TG from "./assets/TG.svg"
import TW from "./assets/TW.svg"
import leftOreo from "./assets/leftOreo.png"
import rightOreo from "./assets/rightOreo.png"
import meme1 from "./assets/meme1.png"
import meme2 from "./assets/meme2.png"
import meme3 from "./assets/meme3.png"
import meme4 from "./assets/meme4.png"
import meme5 from "./assets/meme5.png"

function App() {

  const ca = "TBA"
  const ticker = "$OREO"

  return (
    <div className="App">
      <div className="section1" id="section1">
        <div className="layout">
          <div className="header">
            <div className="logoBlock">
              <img alt="logo" className="logo" src={logo}/>
            </div>
            <div className="menu">
              <ul>
                <a href="https://t.me/OREOsolana"><li className="menuItem">$OREO</li></a>
                <a href="#section2"><li className="menuItem">MEMES</li></a>
              </ul>
              <div className="socials">
                <a href="https://t.me/OREOsolana"><img alt="telegram" className="socialIcon" src={TG}/></a>
                <a href="https://twitter.com/OreoLoverSol"><img alt="twitter" className="socialIcon" src={TW}/></a>
              </div>
            </div>
          </div>
          <div className="welcome">
            <div className="left">
              <img alt="oreo" className="oreo" src={oreo}/>
            </div>
            <div className="right">
              <div className="ca">
                <p className="caText">
                  CA: {ca}
                </p>
              </div>
              <div className="textBlock">
                <h1 class="heading black">
                  YUMMY BUT NOT COOKIE - LICK THE CREAM
                </h1>
                <p className="subheading">
                  Sometimes just add white whip cream
                  and your life will get better
                </p>
                <button className="button">JOIN {ticker}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2" id="section2">
        <div className="layout">
          <h1 className="heading white">
            OREO THAT SUPPOSE TO BE OREO
          </h1>
          <div className="meme1">
            <img alt="noOreo" className="leftOreo" src={leftOreo}/>
            <img alt="meme1" className="meme_1" src={meme1}/>
            <img alt="noOreo2" className="rightOreo" src={rightOreo}/>
          </div>
          <div className="meme2">
            <img alt="meme2" className="meme_2" src={meme2}/>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="layout">
          <img alt="meme3" className="meme_3" src={meme3}/>
          <h1 className="heading black">
            MACRON LOVES OREO
          </h1>
          <img alt="meme4" className="meme_4" src={meme4}/>
        </div>
        <img alt="meme5" className="meme_5" src={meme5}/>
      </div>
    </div>
  );
}

export default App;
