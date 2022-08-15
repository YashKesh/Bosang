import React from 'react'
import '../style/conciergedesk.css'
import Ellipse_11 from '../img/Ellipse_11-removebg-preview.png'
import Ellipse_12 from '../img/Ellipse_12-removebg-preview.png'

const Conciergedesk = () => {
  return (
    <>
    <section className='cdesk'>
      <div className="graphic"></div>
    <div className="graphic"></div>
    <div className="graphic"></div>
    
    <div className="main-content">
        <div className="heading">
            <h1>Concierge Desk&nbsp;:</h1>
        </div>
        <div className="inputs two-along">
            <div>
                <label for="">Name&nbsp;:</label><br/>
                <input type="text" name="" id=""/><br/>
            </div>
            <div>
                <label for="">Email&nbsp;:</label><br/>
                <input type="text" name="" id=""/><br/>
            </div>
        </div>
        <div className="inputs">
            <label for="">Contact Number&nbsp;:</label><br/>
            <input type="text" name="" id=""/>
        </div>
        <div className="inputs textarea">
            <label for="">How can we help you ?&nbsp;:</label><br/>
            <input type="text" name="" id="" maxlength="1000"/>
        </div>
   
        </div>
        <div className="button-start">
            <button className="Submit">
                Submit
            </button>
        </div>
        <div className="graphic bottom"></div>
    <div className="graphic bottom"></div>
  
    <div className="ellipse"> 
        <img src={Ellipse_11} alt=""/>

    </div>
    <div className="ellipse2">
        <img src={Ellipse_12} alt=""/>
    </div>
    </section>
 
    </>
  )
}

export default Conciergedesk
