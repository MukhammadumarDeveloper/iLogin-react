import logo from './images/facebook.png'
import telegramIcon from './images/watsapp.png'
import './App.css';
import { useState } from 'react'
import { useRef } from 'react'





function App() {
  const [icon, setIcon] = useState(logo)
  const chenger = useRef(null)
  

  const nimadir = (evt) => {
    evt.preventDefault()

    const telInput = document.querySelector('.tel-input').value.trim();
    const passwordInput = document.querySelector('.password-input').value.trim();
    var imgAlt = document.querySelector('.logo').alt;
  

    if ( telInput === '' ||passwordInput === '') {
      return
    } if (imgAlt === '') {
      setIcon(telegramIcon)
      chenger.current.classList.add('tw-color')
      imgAlt = 'tw'
    } else if (imgAlt === 'tw') {
      setIcon(logo)
      chenger.current.classList.remove('tw-color')
      chenger.current.classList.add('fb-color')
    } 

    console.log(imgAlt);
  }



  return (
  
    <>
      <div className="logo-wrapper">
        <img className="logo" src={icon} alt="" width="130" height="130" />
      </div> 
      <div className="box" ref={chenger}>
        <h2 className="title">Sign in</h2>
        <form className="signin-form">
          <input className="inputs tel-input" type="text" placeholder="Email or phone number" required></input>
          <input className="inputs password-input" type="text" placeholder="Password" required></input>
          <button className="signin-btn" type="submit" onClick = {nimadir}
          >Sign in</button>
        </form>
        <a className="signup-link" href="https://facebook.com" target="blank">Sign up for iLogin</a>
      </div>
    </>
    
  );
}

export default App;
