import React from 'react';
import FadeInSection from '../FadeInSection';
import './Contact.css';

const Contact = () => {
  return (
    <div className='third-section' id='contact'>
      <FadeInSection>
        <div className='contact'>
          Contact Me Now!
        </div>
      </FadeInSection>
      <FadeInSection>
        <form action="https://formsubmit.co/509c114e4327e0f641d30797d795982c" method="POST">
          <input type='text' name='Full Name' placeholder='Full Name' required></input>
          <input type='email' name='Email' placeholder='Email' required></input>
          <textarea name='Message' placeholder='Message' required></textarea>
          <div className='send'>
            <button type='submit' className='but'>send</button>
          </div>
        </form>
      </FadeInSection>
      
    </div>
  )
}

export default Contact
