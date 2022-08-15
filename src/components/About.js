import React from 'react'
import '../style/about.css'
import yellowcoinlogo from '../img/Yellowlogo.png'

function About() {
  return (
    <>
      <main>
        <div className="atop">
          <div className='atop-text'>
            <span className='atopspan'>Bosang coin</span>
            <h1 className='atoph1'>ABOUT US</h1>
            <p className='atoppara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
             <img src={yellowcoinlogo} alt="Bosangcoin" className="yellowcoinlogo"/>
             </div>
        </div>
           <h1 className='abottomh1'>Our Features</h1>
           <hr />




           <div className="bottommain">
        <div className="abottom">
           <div id="aitem">
            <img src="" alt="" srcset="" />
            </div>
            <span id='aitemheading'>Whitepaper</span>
            <button className='abtn'>Download Now</button>
        </div>


         <div className="abottom">
           <div id="aitem">
            <img src="" alt="" srcset="" />
            </div>
            <span id='aitemheading'>Debit Cards</span>
            <button className='abtn'>Know More</button>
        </div>

        <div className="abottom">
           <div id="aitem">
            <img src="" alt="" srcset="" />
            </div>
            <span id='aitemheading'>Partner Apps</span>
            <button className='abtn'>Know More</button>
        </div>
        </div> 


        <div className="bottommain1">
        <div className="abottom">
           <div id="aitem">
            <img src="" alt="" srcset="" />
            </div>
            <span id='aitemheading'>Rewards Program</span>
            <button className='abtn'>Know More</button>
        </div>

        <div className="abottom">
           <div id="aitem">
            <img src="" alt="" srcset="" />
            </div>
            <span id='aitemheading'>Partnerships</span>
            <button className='abtn'>Know More</button>
        </div>
        </div>
      </main>
    </>
  )
}

export default About
