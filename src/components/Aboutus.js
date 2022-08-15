import React from 'react'
import '../style/aboutus.css'
import card from '../img/aboutimg/maincard.png'
import bosnagcoin from '../img/aboutimg/bosangcoin.png'
import bitcoin from '../img/aboutimg/bitcoin.png'
import dogcoin from '../img/aboutimg/Dogecoin.png'
import shibacoin from '../img/aboutimg/shibacoin.png'

const AboutUs = () => {
    return (
        <>
            <section className="wallet">
                {/* 1section left side data  */}

                <div className="wallettext">
                    <h1>Your Wallet:- </h1>
                    <img src={card} alt="" className="card" />
                    <h3>UNIQUE ID: xkhiay1256</h3>



                    {/* 1section right side data  */}
                    <div>
                        <img src={bosnagcoin} alt="" className="" />
                    </div>
                </div>
                <div>
                    <img src={bitcoin} alt="" className="" />
                </div>
                <div>
                    <img src={dogcoin} alt="" className="" />
                </div>
                <div>
                    <img src={shibacoin} alt="" className="" />
                </div>

                <div><button className='DEPOSIT'>DEPOSIT</button>
                </div>
                <div>
                <button className='WITHDRRAW'>WITHDRRAW</button></div>

            </section>
        </>
    )
}

export default AboutUs
