import './HomePage.css'
import BindleverseHeader from './BindleverseHeader'

// ✅ Re-add these:
import charlieFloat from '../assets/icons/charlie-float.png'
import charlieMoon from '../assets/icons/charlie-moon.png'
import starfieldBase from '../assets/icons/starfield-base.png'
import starfieldTwinkle from '../assets/icons/starfield-twinkle.png'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="glow-shell">
        <div className="starfield-layer">
          <img src={starfieldBase} alt="Starfield Base" className="starfield-static" />
          <img src={starfieldTwinkle} alt="Starfield Twinkle Overlay" className="starfield-twinkle" />
        </div>

        <div className="glow-border">
          <div className="glow-container">
            <BindleverseHeader />

            <div className="starfield-layer mobile-stars">
              <img src={starfieldBase} alt="Starfield Base" className="starfield-static" />
              <img src={starfieldTwinkle} alt="Starfield Twinkle" className="starfield-twinkle" />
            </div>

            <div className="background-image-wrapper">
              <a
                href="https://www.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="moon-hover-link"
              >
                <img src={charlieMoon} alt="Moon Surface" className="charlie-moon-bg" />
              </a>
            </div>

            <div className="charlie-wrapper">
              <a
                href="https://music.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="charlie-hover-link"
              >
                <img src={charlieFloat} alt="Charlie Floating" className="charlie-icon floating-charlie" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
