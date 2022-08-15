import React from 'react'
import '../style/debitcard.css'
import debit1 from '../img/19.png'
import debit2 from '../img/20.png'
import debit3 from '../img/21.png'
import debit4 from '../img/22.png'
import debit5 from '../img/23.png'

export default function Debitcards() {
  return (
    <><section className='Debit-cards-tier'>
    <div className='debit-card-main'>
    <div className="announcementheading card-tier">
        Card Tiers:
    </div>
    <hr className='debitcard-sep'></hr>
    <div className='card-details'>
        <div className='cards-box'>
            <img src={debit1}></img>
            <div className='card-specs'>
                <h1 className='card-head'>ARES</h1>
                <ul>
                    <li>Allows you to convert cryptocurrency<br></br> in real time</li>
                </ul>
                <h1 className='price'>$5/<span className='period'>per year</span></h1>
                <button className='purchase-button'>Purchase Now</button>
            </div>

        </div>
        <div className='cards-box'>
        <img src={debit2}></img>
        <div className='card-specs'>
                <h1 className='card-head'>POSEIDEN</h1>
                <ul>
                    <li>Allows you to convert
cryptocurrency<br></br> in real time free Spotify,netflix,Prime,
<br></br>2% cash back on all spends</li>
<li>
Allows you to send money
anywhere<br></br> in the world.<br></br>
Hence a forex card.

</li>
                </ul>
                <h1 className='price'>$250/<span className='period'>per year</span></h1>
                <button className='purchase-button'>Purchase Now</button>
            </div>
            
        </div>
        <div className='cards-box'>
        <img src={debit3}></img>
        <div className='card-specs'>
                <h1 className='card-head'>ZEUS</h1>
                <ul>
                    <li>Allows you to convert <br></br>cryptocurrency in real time</li>
                    <li>
Allows you to send money
anywhere<br></br> in the world.<br></br>
Hence a forex card.

</li>
                </ul>
                <h1 className='price'>$500/<span className='period'>per year</span></h1>
                <button className='purchase-button'>Purchase Now</button>
            </div>
        </div>
    </div>
    <div className='card-details bottom-cards'>
        <div className='cards-box'>
            <img src={debit4}></img>
            <div className='card-specs'>
                <h1 className='card-head'>HAYDES</h1>
                <ul>
                    <li>Allows you to convert
cryptocurrency<br></br> in real time free Spotify,netflix,Prime,
<br></br>2% cash back on all spends</li>
<li>
Allows you to send money
anywhere<br></br> in the world.<br></br>
Hence a forex card.

</li>
                </ul>
                <h1 className='price'>$750/<span className='period'>per year</span></h1>
                <button className='purchase-button'>Purchase Now</button>
            </div>

        </div>
        <div className='cards-box'>
        <img src={debit5}></img>
        <div className='card-specs'>
                <h1 className='card-head'>ALL GOD</h1>
                <ul>
                    <li>Allows you to convert
cryptocurrency<br></br> in real time free Spotify,netflix,Prime,
<br></br>2% cash back on all spends</li>
<li>
Allows you to send money
anywhere<br></br> in the world.<br></br>
Hence a forex card.

</li>
                </ul>
                <h1 className='price'>$1400/<span className='period'>per year</span></h1>
                <button className='purchase-button'>Purchase Now</button>
            </div>
            
        </div>
        </div>

    </div>
    </section>
    </>
  )
}
