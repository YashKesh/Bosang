import React from 'react'
import '../style/footer.css'
import image1 from '../img/Googlestorewhite.png'
import image2 from '../img/Appstorewhite.png'
import image from '../img/Bosang Logo-02.png'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <section className='Footer-main'>
        <div className='footer-img'>
        <div className="logo footerlogo">
        <img src={image} alt=""/>
        <span style={{color:'#ffff'}}>BOSANG</span>
    </div>
            < div className='store-img'>

           
            <div>
            <img src={image1} className='google10' ></img>

            </div>
            <div>
            <img src={image2} className='apple'></img>

            </div>
            </div>
        </div>
        <hr className='footer-line'></hr>
        <div className='footer-content'>
            <div>
                <h2> About us</h2>
                <ul className='footer-subcontent'>
                <li>Whitepaper</li>
                <li><Link to='/debitcard' style={{textDecoration:"none",color:"#ffff"}}>Debit and Credit cards</Link> </li>
                <li>
                    Partner Apps
                </li>
                <li><Link style={{textDecoration:"none",color:"#ffff"}} to='/partnership'>Partnership</Link>
                </li>
            </ul>
            </div>
            <div>
            <h2> Services</h2>
                <ul className='footer-subcontent'>
                    <li>Bosang coin</li>
                    <li>Blogs</li>
                    <li>community</li>
                    <li><Link to='/announcement' style={{textDecoration:'none',color:'#ffff'}}>Announcement</Link></li>
                    <li>Terms and views</li>
                    <li>Privacy and Policy</li>
                </ul>
            </div>
            <div>
            <h2> Support</h2>
            <ul className='footer-subcontent'>
                <li><Link to='/helpcenter' style={{textDecoration:'none',color:'#ffff'}}> Help center</Link></li>
                <li>Security</li>
                <li><Link to='/contact' style={{textDecoration:'none',color:'#ffff'}}>Coneirge desk </Link></li>
            </ul>
            </div>
            <div>
            <h2> Social</h2>
            <ul className='footer-subcontent'>
                <li><i className=''></i> Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linkdin</li>
                <li>CoinmarketCap</li>
                <li>Discord</li>
                <li>Youtube</li>
                <li>Telegram</li>
            </ul>
            </div>
            
        </div>
        <hr className='footer-line bottom-line' ></hr>
        <div className='bottom-content'>
            <div>

            </div>
            <div>
                
            </div>
        </div>
        <div className='last-details'>
            <div>
                <h3>Contacts us at : xyz@bosangcoin.com</h3>
            </div>
            <div>
                <h3>Call us: 123456789</h3>
            </div>
        </div>
    </section>
    </>
    )
}
