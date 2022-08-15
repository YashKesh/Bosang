import React from 'react'
import '../style/Home.css'
import Googlestore from '../img/Googlestore.png'
import Appstore from '../img/Appstore.png'
import Phone from '../img/Group 12488.png'
import Partner from '../components/Partner'
import Exchange from '../components/Exchanges'
import yellowlogo from '../img/Yellowlogo.png'
import PlaneTiltwhitecard from '../img/19.png'
// import Planewhitecard from '../img/Planewhitecard.png'
import Bosangcard from '../img/22.png'


// import card from '../img/aboutimg/maincard.png'
// import bosnagcoin from '../img/aboutimg/bosangcoin.png'
// import bitcoin from '../img/aboutimg/bitcoin.png'
// import dogcoin from '../img/aboutimg/Dogecoin.png'
// import shibacoin from '../img/aboutimg/shibacoin.png'
// import card1 from '../img/aboutimg/card1.png'

// import posting from '../img/aboutimg/posting.png'
// import watchingvideos from '../img/aboutimg/Watchingvideos.png'
// import playinggames from '../img/aboutimg/playinggames.png'
// import customerloyalty from '../img/aboutimg/customerloyalty.png'
// import donation from '../img/aboutimg/donation.png'
import Userapp from './Userapp'
import ContactSub from './ContactSub'
// import {FiArrowRight } from "react-icons/fi";



export default function Home() {
  return (
    <>
    {/* ======================================== 
  Our Main Rewards Section Start  
======================================== */}

    <section className="section-rewards">
        <div className="rewards">
            <h1>Make life rewarding</h1>
            <div className='download-image'>
                <div>
                <img src={Googlestore} alt="" className="first" />
                </div>
                <div>
                <img src={Appstore} alt="" className="second" />
                </div>
          

            </div>
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
            <img src={Phone} alt="phone img" className="phone" />
        </div>
        
    </section>

    {/* ======================================== 
  Our Main Hero Section Start  
========================================   */}
    <main style={{height:"50vh"}}>
        <section className="section-hero">
            <div className='what-logo'><img src={yellowlogo} alt="logo" />
                {/* <div className='circle'>c</div> */}
            </div>
            <div className="hero">
                <h1>WHAT IS BOSANG?</h1>
                <p><b> Bosang which means reward in in Korean which is the third
                    biggest market for cryptocurrency provides rewards for analytics
                    extracted depending on the app it integrates with</b></p>
            </div>
            
        </section>
    </main>

    <Partner />
    {/* ======================================== 
  Our Main Credit card Section Start  
========================================   */}
    <main style={{height:"50vh"}}>
        <section className="Credit-card">
            <div className="Credit">
                <h1>FEATURES OF CREDIT CARD</h1>
                <p>
                    <ul>

                    
                    <li> We would be offering Debit cards that’s convert cryptocurrency to your usable currency in real time
                    and allow you to spend E.g. swipe for your coffee with crypto holdings.</li>
                    <br />
                    <li>
                    Our Ultimate goal is to become an NBFC(Non banking
                    financial corporation) and provide credit card and loan
                    services.
                    </li>
                    </ul>
                </p>
                <div className='cards-img'>
                <div className='graphics-circle'>
            </div>
            <div className='graphics-circle'>
            </div>
            <div className='graphics-circle'>
            </div>
            <div className='graphics-circle'>
            </div>
            <div className='graphics-circle'>
            </div><img src={PlaneTiltwhitecard} alt="" className='tilt' />
        <img src={Bosangcard} alt="" className='straight' /></div>
            </div>
        </section>
    </main>
    <div className='Exchanges-Page'>
    <Exchange />
    </div>
    {/* USER APPLICATION SECTION */}
    <Userapp/>
    {/*End of user application part */}
    {/*Contact-sub section part */}
    <ContactSub></ContactSub>
    
{/*End of contact-sub section application part */}
    {/* ===============================
our wallet section
=============================== */}

    {/* <section className="wallet"> */}
        {/* 1section left side data  */}

        {/* <div className="wallettext">
            <h1>Your Wallet:- </h1>
            <img src={card} alt="" className="card" />
            <h3>UNIQUE ID: xkhiay1256</h3>



            1section right side data 
            <div className="coinsection">

                <div className="bosang">
                    <img src={bosnagcoin} alt="coin"  />
                    <span>0.1234</span>
                </div>

            <div  className="bit">
                <img src={bitcoin} alt="coin" />
            </div>

            <div  className="dog">
                <img src={dogcoin} alt="coin" />
            </div>

            <div  className="shiba">
                <img src={shibacoin} alt="coin" />
            </div>

        </div>
        </div>


        <div>
            <button className='DEPOSIT'> DEPOSIT </button>
            <br />
            <button className='WITHDRRAW'> WITHDRRAW </button>
        </div> */}

    {/* </section> */}


    {/* ===============================
      Numbers of  credit-cards section
  =============================== */}

    {/* <section className="card"> */}
        {/* <h1>Upgrade your card :-</h1>
        <br />
        <hr />
        <br />
        <div className='img1'><img src={card1} alt="" srcset="" /></div>
        <div className='img2'><img src={card1} alt="" srcset="" /></div>
        <div className='img3'><img src={card1} alt="" srcset="" /></div>
        <br />
        <div className='img4'><img src={card1} alt="" srcset="" /></div>
        <div className='img5'><img src={card1} alt="" srcset="" /></div> */}
        {/* <div><img src={card1} alt="" srcset="" /></div>
        <div><img src={card1} alt="" srcset="" /></div> */}

        {/* <div className='down'>
            <button>KNOW MORE</button> */}
            {/* <FiArrowRight/>  */}
            {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        <hr />
        </div> */}

       
    {/* </section> */}



    {/* ===============================
HOW TO EARN MORE REWARDS
=============================== */}
    {/* <section className="earnsrewards">
        <h1>HOW TO EARN MORE REWARDS</h1>
        <div className="right">
            <h3>Posting on social media</h3>
            <div className='col-12 col-lg-5 leftimg'>
                <img src={posting} alt="" />
            </div>
            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="btn1">
                <button className='btn'>CLICK HERE</button>
            </div>
        </div>

        <div className="left">
            <h3 >Watching Videos</h3>
            <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='col-12 col-lg-5 rightimg'>
            <img src={watchingvideos} alt="" />
            </div>
            <div className="btn2">
                <button className='btn'>CLICK HERE</button>
            </div>
        </div>

        <div className="right">
            <h3>By playing games</h3>
            <div className='col-12 col-lg-5 leftimg'>
                <img src={playinggames} alt="" />
            </div>
            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="btn1">
                <button className='btn'>CLICK HERE</button>
            </div>
        </div>

        <div className='left'>
            <h3 >Being regular on our partnered apps</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='col-12 col-lg-5 rightimg' >
            <img src={customerloyalty} alt=""  />
            </div>
            <div className="btn2">
                <button className='btn'>CLICK HERE</button>
            </div>

        </div>

        <div className="right">
            <h3>By donations and good deeds</h3>
            <div className='col-12 col-lg-5 leftimg'>
                <img src={donation} alt="" />
            </div>
            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="btn1">
                <button className='btn'>CLICK HERE</button>
            </div>
        </div>
        <hr /> */}
        {/* <h2>All Rewards History  <FiArrowRight/> </h2> */}
    {/* </section> */}
</>
  )
}
