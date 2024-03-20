import './CSS/App.css'
import Logo from './assets/googlelogo_light_color_272x92dp.png'
import Bar from './components/Bar'
import Button from './components/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faMicrophone, faCamera, faMagnifyingGlass, faLeaf } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <>
      <div className='TopBar'>
        <a className='Link' href='#'>Gmail</a>
        <a className='Link' href='#'>Images</a>
        <FontAwesomeIcon icon={faBars} className='Icon' />
        <FontAwesomeIcon icon={faUser} className='Icon' />
      </div>
      <div className='CenterSearch'>
        <div className='LogoContainer'>
          <img className='Logo' src={Logo} />
        </div>
        <div className='SearchBarContainer'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='Icon' />
          <input className='SearchBar'></input>
          <FontAwesomeIcon icon={faMicrophone} className='Icon' />
          <FontAwesomeIcon icon={faCamera} className='Icon' />
        </div>
        <div className='Buttons'>
          <Button children={<p>Google Search</p>} />
          <Button children={<p>I'm Feeling Lucky</p>} />
        </div>
        <div className='LanguageLinks'>
          <p>Google offered in:
            <span>
              <a href='#' className='Link'>Hausa</a>
              <a href='#' className='Link'>Igbo</a>
              <a href='#' className='Link'>Èdè Yorùbá</a>
              <a href='#' className='Link'>Nigerian Pidgin</a>
            </span>
          </p>
        </div>
      </div>

      <Bar children=
        {
          <p>Nigeria</p>
        }
        id='bar1'
      />

      <Bar children=
        {
          <>
            <div className='LeftLinks'>
              <a className='Link' href='#'>About</a>
              <a className='Link' href='#'>Advertising</a>
              <a className='Link' href='#'>Business</a>
              <a className='Link' href='#'>How Search Works</a>
            </div>
            <div className='MiddleLinks'>
              <a className='Link' href='#'>
                <FontAwesomeIcon icon={faLeaf} className='Icon' />
                Our third decade of climate action: join us
              </a>
            </div>
            <div className='RightLinks'>
              <a className='Link' href='#'>Privacy</a>
              <a className='Link' href='#'>Terms</a>
              <a className='Link' href='#'>Settings</a>
            </div>
          </>
        }
        id='bar2'
      />
    </>
  )
}

export default App
