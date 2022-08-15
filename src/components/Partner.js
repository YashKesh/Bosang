import React from 'react'
import '../style/Partner.css';
import myntra from '../img/myntra.png';
import amazon from '../img/amazon.png'
import ajio from '../img/ajio.png'

export default function Partner() {
  return (
    <>
    <div className="container">
      <h1 className='text-center font-weight-bold'>PARTNERED WITH</h1>
      <section className="customer_logo_slider">
        <div className="slide"><img src={myntra} alt="" /></div>
        {/* <div className="slide"><img src={pvr} alt="" /></div> */}
        {/* <div className="slide"><img src={inox} alt="" /></div> */}
        <div className="slide"><img src={amazon} alt="" /></div>
        <div className="slide"><img src={ajio} alt="" /></div>
        {/* <div className="slide"><img src="" alt="" /></div> */}
      </section>
    </div>
    </>
  )
}

