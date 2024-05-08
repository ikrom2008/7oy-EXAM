import { useEffect } from 'react'
import './Hero.css'

function Hero() {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
  return (
    <div>
        <div className='hero'>
            <h2>Super Flash Sale<br />50% Off</h2>
        </div>
        <div className='brands'>
            <div className='brand_1'>
                <h4>FS - QUILTED MAXI<br />CROSS BAG</h4>
                <img src="../../../public/newIMG.png" alt="" />
                <div className='brand_price'>
                   <p><span>$534,33</span> 24% Off</p> 
                   <h3>$299,43</h3>
                </div>
            </div>
            <div className='brand_2'>
                <div className='brand_name'>
                    <h4>FS - Nike Air <br /> Max 270 React...</h4>
                    <h3>$299,43</h3>
                </div>
                <img src="../../../public/pngwing.com (16).png" alt="" />
                <div className='brand_price'>
                   <p><span>$534,33</span> 24% Off</p> 
                </div>
            </div>
            <div className='brand_3'>
                <h4>FS - QUILTED MAXI<br />CROSS BAG</h4>
                <p><span>$534,33</span> 24% Off</p> 
                <img src="../../../public/pngwing.com (17).png" alt="" />
                <div className='brand_price' style={{width: '100%'}}>
                   
                   <h3 style={{display: 'flex' , width: '80%' , justifyContent: 'end'}}>$299,43</h3>
                </div>
            </div>
        </div><br /><br /><br />
    </div>
  )
}

export default Hero
