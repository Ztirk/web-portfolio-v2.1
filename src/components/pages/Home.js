import React, {useState} from 'react';
import './Home.css';
import FadeInSection from '../FadeInSection';

const Home = () => {
  const [text, setText] = useState({text1: 'Hi, My name is',
                                    text2: 'Tana',
                                    text3: 'Promwungkwa',
                                    text4: 'krit',
                                    active: true});

  const handleChange = () => {
    if (text.active == false) {
      setText({text1: 'Hi, My name is',
               text2: 'Tana',
               text3: 'Promwungkwa',
               text4: 'krit',
               active: true})
    } else {
      setText({text1: 'I"m a',
               text2: '',
               text3: 'Devoloper',
               text4: 'Website',
               active: false})
    }
}

  return (
    <>
      <div className='first-section' id='home'>
        {/* <video loop autoplay="" muted>
            <source src="./videos/video.mp4" type="video/mp4" />
        </video> */}
        <FadeInSection>
          <div className='text-container'>
            <div className='haha'>
              <div className='text' onChange={handleChange}>{text.text1}</div>
              <div className='text-name' onChange={handleChange}>{text.text2}<span onChange={handleChange}>{text.text4}</span></div>
              <div className='text-name' onChange={handleChange}>{text.text3}</div>
            </div>
            <div className='fk'>
              <button className='btn' onClick={handleChange}>Click Here!</button>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className='animation'>
            <img className='photo-of-me' src='./images/me1.png' alt='me'></img>
            <div className='point'>Point at Me!</div>
            {/* <img className='arrow' src='./images/arrow-right.png' alt='arrow' /> */}
            <img className='i1' src='./images/js.png' alt='js'></img>
            <img className='i2' src='./images/html.png' alt='js'></img>
            <img className='i3' src='./images/css-3.png' alt='js'></img>
            <img className='i4' src='./images/react.png' alt='js'></img>
            <img className='i5' src='./images/bootstrap.png' alt='js'></img>
          </div>
        </FadeInSection>
      </div>
    </>
  )
}

export default Home