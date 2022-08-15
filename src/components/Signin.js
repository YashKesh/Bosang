import React from 'react'
import '../style/signin.css'
import Phone3 from '../img/phone_img.png'
import appstore from '../img/Appstore.png'
import googlestore from '../img/Googlestore.png'
import signin from '../img/signinimg.png'
import Phone from '../img/Group 12488.png'
import {Link} from 'react-router-dom'

const Signin = () => {
    return (
        <>
            <section className='Signin-section'>
                <div className="leftside1">
                    <form action="" className='signinform'>
                        <h1 className='headingofsignin'>Sign in to your account</h1>

                        <div className='name1'>
                            <label htmlFor="name">Username:-</label>
                            <input type="text" autoComplete='off' name='Name' id='name1' />
                        </div>
                        <br />
                        
                        <div className='password1'>
                            <label htmlFor="name">Password:-</label>
                            <input type="text" autoComplete='off' name='Password' id='password' />
                        </div>

                        <div className="signin1"><Link to='/dashboard'><button type='submit'>SIGN IN</button></Link></div>
                        <br />
                        <h2>Haven't Registered yet?</h2>

                        <div className="signup1"><Link to='/signup' style={{textDecoration:'none'}}><button type='submit'>SIGN UP</button> </Link></div>

                    </form>
                    </div>
                    <div className="phone">
            <div className='graphics-circle'>
            </div>
            <div className='graphics-circle'>
            </div>
            <div className='graphics-circle'>
            </div>
            <div className='graphics-circle'>
            </div>
            <div className='graphics-circle'>
            </div>
            {/* <img src={Phone} alt="phone img" className="phone" /> */}
       

                </div>
                <div className="signinimg">
                    <img src={signin} alt="" />

                </div>

         

                <div className='right-part'>
                <div className="phone-img">


                    <img src={Phone} alt="phone img" className="ph1" />
                </div>
                <div className="google">
                    <a href="#">
                        <img src={googlestore} alt="" srcset="" className="google1" />
                    </a>
                </div>
                <div><a href="#">
                    <img src={appstore} alt="" srcset="" className='app1' />
                </a>
                </div>
                </div>
            </section>
        </>
    )
}

export default Signin
