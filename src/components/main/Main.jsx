import './Main.css'
import { useDispatch, useSelector } from 'react-redux'
import { togleWishlist } from '../context/wishlistSlice'
import { IoCartOutline, IoCartSharp, IoHeart, IoHeartOutline } from 'react-icons/io5'
import { addToCart } from '../context/cartSlice'
import { Rating } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Main({product}) {
    let wish = useSelector(state => state.wishlist.value)
    let carts = useSelector(state => state.cart.value)
    const [searchTerm, setSearchTerm] = useState('');
    const [slice, setSlice] = useState(false);
    const dispatch = useDispatch()
    
        let prs = product?.map((item) => (
                    <li key={item.id} className='list'>
                        <img src={item.img} alt="" />
                        <div className='likebtn'>
                            <button style={{color:'rgba(51, 160, 255, 1)'}} onClick={() => dispatch(togleWishlist(item))} >{wish.some(w => w.id === item.id) ?<IoHeart /> :<IoHeartOutline /> }</button>
                            <button style={{color:'rgba(51, 160, 255, 1)'}} onClick={() => dispatch(addToCart(item))} >{carts.some(w => w.id === item.id) ? <IoCartSharp />:<IoCartOutline />}  </button>
                        </div>
                        <Link style={{textDecoration: 'none'}} to={`/product/${item.id}`}>
                            <h5>{item.title.slice(0,20)}</h5>
                        </Link>
                        <Rating name="half-rating" defaultValue={0.5} precision={0.5} />
                        <div className='price'>
                            <p><span className='spanprice'>${item.price}</span> <span className='spancount'>${item.oldprice}</span> 24% off</p>
                        </div>
                    </li>
                ))
                useEffect(() => {
                    window.scrollTo(0,0)
                  },[])
                  const handleSearch = () => {
                    const filteredProducts = product.filter(
                      (products) =>
                        products.title.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                    return filteredProducts.map((item) => (
                        <li key={item.id} className='list'>
                        <img src={item.img} alt="" />
                        <div className='likebtn'>
                            <button style={{color:'rgba(51, 160, 255, 1)'}} onClick={() => dispatch(togleWishlist(item))} >{wish.some(w => w.id === item.id) ?<IoHeart /> :<IoHeartOutline /> }</button>
                            <button style={{color:'rgba(51, 160, 255, 1)'}} onClick={() => dispatch(addToCart(item))} >{carts.some(w => w.id === item.id) ? <IoCartSharp />:<IoCartOutline />}  </button>
                        </div>
                        <Link style={{textDecoration: 'none'}} to={`/product/${item.id}`}>
                            <h5>{item.title.slice(0,20)}</h5>
                        </Link>
                        <Rating name="half-rating" defaultValue={0.5} precision={0.5} />
                        <div className='price'>
                            <p><span className='spanprice'>${item.price}</span> <span className='spancount'>${item.oldprice}</span> 24% off</p>
                        </div>
                    </li>
                    ));
                  };
                  let  prslice
                  let shh
                  if(slice){
                    prslice = prs.slice(0,12)
                    shh = 'HIDE'
                  }else{
                    prslice = prs.slice(0,8)
                    shh = 'LOAD MORE'
                  }
                 
  return (
    <div>
      <main className='main'>
        <section className='best'>
            <h3>BEST SELLER</h3>
        <ul className='newpages'>
            <li style={{textDecoration: 'underline' , color: 'rgba(51, 160, 255, 1)'}}>All</li>
            <li>Bags</li>
            <li>Sneakers</li>
            <li>Belt</li>
            <li>Sunglasses</li>
        </ul>
        <div className='inp'>
            <input onClick={handleSearch} type="text" placeholder='ishlaydigan input nomi boyicha'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <ul className='lists'>
        {searchTerm ? (
          handleSearch()
        ) : (
          prslice
        )}
        </ul>
        <button style={{textDecoration: 'underline' , color: 'rgba(51, 160, 255, 1)', border:'none' , background: 'white', zIndex: '999999999', fontSize: '20px'}} onClick={() => setSlice(!slice)}>{shh}</button>
        </section><br /><br /><br />
        <section className='newbrand'>
            <div className='els'>
            <div>
                <h2>Adidas Men Running<br />Sneakers</h2>
                <p>Performance and design. Taken right to the edge.</p>
                <div className='shop'>
                <button>SHOP NOW</button>
                </div>
            </div>
            <img src="shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png" alt="" />
            </div>
        </section><br /><br /><br />
        <section className='shipping'>
            <div className='pr_1'>
                <img src="shipping.png" alt="" />
                <br />
                <h3>FREE SHIPPING</h3>
                <p>Lorem Ipsum is simply <br /> dummy text of the <br /> printing and typesetting <br /> industry.</p>
            </div>
            <div className='pr_1 heyy1'>
                <img src="refund.png" alt="" />
                <br />
                <h3>100% REFUND</h3>
                <p>Lorem Ipsum is simply <br /> dummy text of the <br /> printing and typesetting <br /> industry.</p>
            </div>
            <div className='pr_1 heyy2'>
                <img src="support.png" alt="" />
                <br />
                <h3>SUPPORT 24/7</h3>
                <p>Lorem Ipsum is simply <br /> dummy text of the <br /> printing and typesetting <br /> industry.</p>
            </div>
        </section><br /><br /><br />
        <section className='latest'>
            <h2>LATEST NEWS</h2>
            <div className='news'>
                <div className='infos'>
                <img src="Nike_logo_emblem_logotype 1.png" alt="" />
                <div>
                    <h5>01 Jan, 2015</h5>
                    <h4>Fashion Industry</h4>
                    <p>Lorem Ipsum is simply <br /> dummy text of the <br />printing and typesetting <br /> industry.</p>
                </div>
            </div>
            <div className='infos none1'>
                <img src="figma-1-logo 1.png" alt="" />
                <div>
                    <h5>01 Jan, 2015</h5>
                    <h4>Fashion Industry</h4>
                    <p>Lorem Ipsum is simply <br /> dummy text of the <br />printing and typesetting <br /> industry.</p>
                </div>
            </div>
            <div className='infos none2'>
                <img src="kronos-logo-1-1 1.png" alt="" />
                <div>
                    <h5>01 Jan, 2015</h5>
                    <h4>Fashion Industry</h4>
                    <p>Lorem Ipsum is simply <br /> dummy text of the <br />printing and typesetting <br /> industry.</p>
                </div>
            </div>
            </div>
        </section><br /><br /><br />
        <section className='featured'>
            <h2>FEATURED PRODUCTS</h2>
            <div className='nikeflex'>
                <div className='nike'>
                    <img src="Rectangle 1 copy 25.png" alt="" />
                    <div className='rat'>
                        <h4>Blue Swade Nike <br /> Sneakers</h4>
                        <Rating style={{width: '100%'}} name="half-rating" defaultValue={4} precision={0.5} />
                        <div className='nikeprice'>
                            <p>$499 <span> $599</span></p>
                        </div>
                    </div>
                </div>
                <div className='nike none1'>
                    <img src="Rectangle 1 copy 25.png" alt="" />
                    <div className='rat'>
                        <h4>Blue Swade Nike <br /> Sneakers</h4>
                        <Rating style={{width: '100%'}} name="half-rating" defaultValue={4} precision={0.5} />
                        <div className='nikeprice'>
                            <p>$499 <span> $599</span></p>
                        </div>
                    </div>
                </div>
                <div className='nike none2'>
                    <img src="Rectangle 1 copy 25.png" alt="" />
                    <div className='rat'>
                        <h4>Blue Swade Nike <br /> Sneakers</h4>
                        <Rating style={{width: '100%'}} name="half-rating" defaultValue={4} precision={0.5} />
                        <div className='nikeprice'>
                            <p>$499 <span> $599</span></p>
                        </div>
                    </div>
                </div>
            </div><br /><br />
            <div className='inps'>
            <input type="text" name="" id="" placeholder='Search query...' />
            <button>Search</button>
            </div>
        </section><br /><br /><br />
      </main>
    </div>
  )
}

export default Main
