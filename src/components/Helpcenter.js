import React from 'react'
// import helpimg from '../img/helpimg.png'
import '../style/helpcenter.css'

const Helpcenter = () => {
  return (
    <>
      <section className='help'>
        <div className="reactangle">
            <div className='insidebox'>
              
            <span>How Can we Help?</span>
                <div className="cinput">
             
                <input type="text" placeholder="Enter the text"/>
                </div>
            </div>
            {/* <div className="helpimg">
                <img src={helpimg} alt="helpimg"  />
            </div> */}
        </div>
         <div className="fcontainer">
        <div className="items">Signing up & KYC</div>
        <div className="items">Deposit & WIthdraw</div>
        <div className="items">Announcement</div>
        <div className="items">Coupons</div>
        <div className="items">Security</div>
        <div className="items">Account management</div>
        </div>
      


      </section>
    </>
  )
}

export default Helpcenter
