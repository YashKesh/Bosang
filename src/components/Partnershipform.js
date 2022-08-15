import React from 'react'
import '../style/conciergedesk.css'
// import '../styles/partnership.css'

const Partnershipform = () => {
  return (
    <>
    <div>
      <div className="graphic"></div>
        <div className="graphic"></div>
        <div className="main-content">
            <div className="heading">
                <h1>Partnerships&nbsp;:</h1>
            </div>
            <div className="partner-content">
                <div className="form-content">
                    <div className="inputs textarea new-line">
                        <label for="">Name of the firm&nbsp;:</label><br/>
                        <input type="text" name="" id=""/>
                    </div>
                    <div className="inputs textarea new-line">
                        <label for="">Name of the product&nbsp;:</label><br/>
                        <input type="text" name="" id="" maxlength="1000"/>
                    </div>
                    <div className="inputs textarea new-line">
                        <label for="">What are you looking in a partnership&nbsp;:</label><br/>
                        <input type="text" name="" id="" maxlength="1000"/>
                    </div>
                    <div className="heading second-head" style="margin-top:3%;">
                        <h2>Contact Details&nbsp;:</h2>
                    </div>
                    <div className="inputs two-along new-along" style="margin-top: 2%;">
                        <div>
                            <label for="">Mobile No&nbsp;:</label><br/>
                            <input type="text" name="" id=""/><br/>
                        </div>
                        <div style="margin-left: -20%;"> 
                            <label for="">Email&nbsp;:</label><br/>
                            <input type="text" name="" id=""/><br/>
                        </div>
                    </div>
    
                </div>
                <div className="reachus">
                    <h2>Reach Us</h2>
                    <br/>
                    
    
                </div>
            </div>
        </div>
        <div className="ellipse"> 
            <img src="Ellipse_11-removebg-preview.png" alt=""/>
    
        </div>
        <div className="ellipse2">
            <img src="Ellipse_12-removebg-preview.png" alt=""/>
        </div>
     
    </div>
    </>
  )
}

export default Partnershipform
