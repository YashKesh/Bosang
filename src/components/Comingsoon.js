import React from 'react'
import bosangcoin from '../img/Bosangcoin.png'
import '../style/comingsoon.css'


const Comingsoon = () => {
    return (
        <>
            <div className="ccontainer">
                <div className="cimg">
                    <img src={bosangcoin} alt="" />
                </div>
                <span className='h1'>COMING SOON</span>
                <p className='para'>We are rewarding company making the rewarding experience to make the customer use our app
                </p>
                <div className="cbutton">
                    <button>JOIN THE ICO</button>
                </div>
                <div className="Chr"><hr /></div>
                <div className="cheading">
                    <h2>JOIN OUR NEWSLETTER</h2>
                </div>
                <div className="cbutton1">
                    <button>EMAIL-ADDRESS</button>
                </div>
                <div className="para1">
                    <p>By clicking to the subscribe button you agree to the terms and conditions</p>
                </div>
                <div className="cbutton2">
                    <button>
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </>
    )
}

export default Comingsoon
