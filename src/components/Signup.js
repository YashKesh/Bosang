import React from 'react'
import '../style/signup.css'
import Phone3 from '../img/Group 12488.png'
import Phone from '../img/phone_img.png'
import appstore from '../img/Appstore.png'
import googlestore from '../img/Googlestore.png'
import signup from '../img/signupimg (1).png'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <section>
        <div className="leftside">

          <form action="">
            <h1>Create your new account</h1>

            <div className='name'>
              <label htmlFor="name">Name:-</label><br />
              <input type="text" autoComplete='off' name='Name' id='Name' />
            </div><br />

            <div className='username'>
              <label htmlFor="Username">Username:-</label><br />
              <input type="text" autoComplete='off' name='Username' id='Username' />
            </div>

            <div className='contactnumber'>
              <label htmlFor="Contact Number">Contact Number:-</label><br />
              <input type="text" autoComplete='off' name='Contact Number' id='Contact Number' />
            </div>


            <div className='password'>
              <label htmlFor="Password">Password:-</label><br />
              <input type="text" autoComplete='off' name='Password' id='Password' />
            </div>

            <div className='reenterpassword'>
              <label htmlFor="Re-enter Password">Re-enter Password:-</label><br />
              <input type="text" autoComplete='off' name='Re-enter Password' id='Re-enter Password' />
            </div>

            <div className="signup"><button type='submit'>SIGN UP</button></div>
            <div className='signin'>
              <h4> Already signed up ?</h4>
              {/* <Link to ='/Signin'> <button type='submit'>SIGN IN</button></Link> */}
         <Link to='/Signin'> <button type='submit'>SIGN IN</button></Link>
            </div>
          </form>
          {/* <div className="signupimg">
            <img src={signup} alt="" />

          </div> */}


        </div>
        <div className="dotsection">
          <span className="dot"></span>
          <span className="dot1"></span>
          <span className="dot2"></span>
          <span className="dot3"></span>
          <span className="dot4"></span>
        </div>


        <div className="phone">


          <img src={Phone3} alt="phone img" className="ph" />
        </div>
        <div className="google">
          <a href="">
            <img src={googlestore} alt="googlestoreimg"  className="google" />
          </a>
        </div>
        <div>
          <a href="">
            <img src={appstore} alt="appstoreimg"  className='app' />
          </a>
        </div>
      </section>
    </>
  )
}

export default Signup
