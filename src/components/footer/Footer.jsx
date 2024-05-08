import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import './Footer.css'
import { useEffect } from 'react'
function Footer() {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
  return (
    <div>
      <footer className='footer'>
        <div className='footertexts'>
            <div className='stac_1'>
                <div className='text'>
                    <ul>
                        <li style={{width: '40%'}}><img src="../../../public/Icon.svg" alt="" /> E-Comm</li>
                        <li>Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry. Lorem <br /> Ipsum has been the industrys standard <br />dummy text ever.Since the 1500s, when <br /> an unknown printer.</li>
                    </ul>
                </div>
                <div className='text'>
                    <ul>
                        <li>Follow Us</li>
                        <li>Since the 1500s, when an unknown <br /> printer took a galley of type and <br /> scrambled.</li>
                        <li style={{width: '40%'}}><FaFacebookF style={{color: 'rgba(56, 92, 142, 1)'}} /> <FaTwitter style={{color: 'rgba(3, 169, 244, 1)'}}/> </li>
                    </ul>
                </div>
                <div className='text'>
                    <ul>
                        <li>Contact Us</li>
                        <li>E-Comm , 4578 <br /> Marmora Road, <br />Glasgow D04 89GR</li>
                    </ul>
                </div>
            </div>
            <div className='stac_1'>
                <div className='text'>
                    <ul>
                        <li>Infomation</li>
                        <li>About Us <br />Infomation <br />Privacy Policy <br />Terms & Conditions</li>
                    </ul>
                </div>
                <div className='text'>
                    <ul>
                        <li>Service</li>
                        <li>About Us <br />Infomation <br />Privacy Policy <br />Terms & Conditions</li>
                    </ul>
                </div>
                <div className='text'>
                    <ul>
                        <li>My Account</li>
                        <li>About Us <br />Infomation <br />Privacy Policy <br />Terms & Conditions</li>
                    </ul>
                </div>
                <div className='text'>
                    <ul>
                        <li>Our Offers</li>
                        <li>About Us <br />Infomation <br />Privacy Policy <br />Terms & Conditions</li>
                    </ul>
                </div>
            </div>
            <div className='cash'>
                <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                <img src="Brands.png" alt="" />
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
