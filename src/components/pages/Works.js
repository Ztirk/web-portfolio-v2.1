import React from 'react';
import './Works.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import FadeInSection from '../FadeInSection';

const Works = () => {
  return (
    <div className='second-section' id='works'>
        <FadeInSection>
            <div className='contact'>Here's some of my projects</div>
        </FadeInSection>
        <FadeInSection>
            <div className='frame'>
               <div className='slide'>
                   <Slide>
                        <div className='link-container'>
                            <div>
                                <div className='project-name'>Random Quote Machine</div>
                                <a href='https://ztirk.github.io/random-quote-machine/' target="_blank"><img className='project-image' src='./images/web/random.png'></img></a>
                                <div className='project-popup'>Using React, Bootstrap</div>
                            </div>
                            <div>
                                <div className='project-name'>Markdown Previewer</div>
                                <a href='https://ztirk.github.io/markdown-previewer/' target="_blank"><img className='project-image' src='./images/web/mark.png'></img></a>
                                <div className='project-popup'>Using React, Bootstrap</div>
                            </div>
                        </div>
                        <div className='link-container'>
                            <div>
                                <div className='project-name'>Drum Machine</div>
                                <a href='https://ztirk.github.io/drum-machine/' target="_blank"><img className='project-image' src='./images/web/drum.png'></img></a>
                                <div className='project-popup'>Using React, Bootstrap</div>
                            </div>
                            <div>
                                <div className='project-name'>Javascript Calculator</div>
                                <a href='' target="_blank"><img className='project-image' src='./images/web/calculator.png'></img></a>
                                <div className='project-popup'>Using React, Bootstrap</div>
                            </div>
                        </div>
                        {/* <div className='link-container'>
                            <div>
                                <div className='project-name'>25+5 Clock</div>
                                <a href='' target="_blank"><img className='project-image' src='./images/web/random.png'></img></a>
                                <div className='project-popup'>Using React, Bootstrap</div>
                            </div>
                            <div>
                                <div className='project-name'>CRUD</div>
                                <a href='' target="_blank"><img className='project-image' src='./images/web/random.png'></img></a>
                                <div className='project-popup'>Using React</div>
                            </div>
                        </div> */}
                    </Slide>
               </div>
            </div>
        </FadeInSection>
    </div>
  )
}

export default Works