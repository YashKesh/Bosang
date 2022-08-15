import React from 'react'
import '../style/Contact.css';
import Groupimg from '../img/Group 12492.png'
import Groupimg1 from '../img/Group 12493.png'
import Groupimg2 from '../img/Group 12494.png'

export default function contact_sub() {
  return (
    <>
    <div className="container contact">
      {/* <h1 className='text-center font-weight-bold'>PARTNERED WITH</h1> */}
      <section className="customer_logo_slider slider">
      <div className='contact-flex'>
        <div className='support-img'>
        <img src={Groupimg} alt=''></img>
        </div>
        <div className='support-img'>
        <img src={Groupimg1}  alt=''></img>
        </div>
        <div className='support-img'>
          <img src={Groupimg2} alt=''></img>
        </div>
      </div>
      </section>
    </div>
    </>
  )
}

