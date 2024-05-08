import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function Header() {
    let wish = useSelector(state => state.wishlist.value)
    let carts = useSelector(state => state.cart.value)
    let navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
  return (
    <><br />
      <div className='container'>
        <header className='header'>
            <nav className='navbar'>
                <div className='select'>
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                    <select name="" id="">
                        <option value="">USD</option>
                    </select>
                </div>
                <ul>
                    <Link style={{textDecoration: 'none' , color: 'black'}} to='/login'>
                    <li style={{fontSize: '18px'}} ><i className="fa-regular fa-user"></i></li>
                    </Link>
                    <Link style={{textDecoration: 'none' , color: 'black'}} to='/wishlist'>
                        <li style={{fontSize: '16px'}} ><i className="fa-regular fa-heart"></i><sup className='sups'>{wish.length}</sup></li>
                    </Link>
                    <Link style={{textDecoration: 'none' , color: 'black'}} to='/card'>
                        <li style={{fontSize: '16px'}} className='not'><i className="fa-solid fa-cart-shopping"></i><sup className='sups'>{carts.length}</sup></li>
                    </Link> 
                    <li style={{fontSize: '16px', fontWeight: '400'}}>Items</li>
                    <li style={{opacity: '0.5', gap:'7px' ,fontSize: '16px', fontWeight: '400'}}>$0.00<i className="fa-solid fa-magnifying-glass"></i></li>
                </ul>
            </nav><br />
            <div className="pages">
                <div className="logo" onClick={() => navigate('/')}>
                    <img src="../../../public/Icon.svg" alt="" />
                    <h3>E-Comm</h3>
                </div>
                <ul className="page">
                    <li style={{color: 'rgba(51, 160, 255, 1)'}} onClick={() => navigate('/')}>HOME</li>
                    <li>BAGS</li>
                    <li>SNEAKERS</li>
                    <li>BELT</li>
                    <li onClick={() => navigate('/contact')}>CONTACT</li>
                </ul>
            </div>
        </header>
      </div><br />
    </>
  )
}

export default Header
