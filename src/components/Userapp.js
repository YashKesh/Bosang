import React from 'react'
import '../style/Userapp.css'
import Groupimg from '../img/Group 12489.png'
import Groupimg1 from '../img/Group 12490 (1).png'
import Groupimg2 from '../img/Group 12491 (1).png'
export default function Userapp() {
  return (
    <>
    <div className='Userapp-container'>
    <h1>Use Our App and Get Amazing rewards</h1>
      <section className='Userapp-content'>

        <div className='Userapp-images'>
        <div className='Userapp-main image1'>
        <img src={Groupimg} alt='' />
        </div>
        <div className='Userapp-main image2'>
        <img src={Groupimg1} alt='' />

</div>
<div className='Userapp-main image1 image-right' >
<img src={Groupimg2} alt='' />

</div>


        </div>
      </section>
    </div>
    </>
  )
}
