import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Single.css'
import { Checkbox, Link, Rating } from '@mui/material';
import { pink, yellow } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { togleWishlist } from '../context/wishlistSlice';
import { IoCartOutline, IoCartSharp, IoHeart, IoHeartOutline } from 'react-icons/io5';
import { addToCart } from '../context/cartSlice';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

function Single({product}) {
    const { id } = useParams();
    const { title , img , price , desc , oldprice, category} = product.find(user => user.id == id) || {};
    let wish = useSelector(state => state.wishlist.value)
    let carts = useSelector(state => state.cart.value)
    let dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
      let pr = product?.map((item) => (
        <li key={id} className='list'>
            <img src={item.img} alt=""/>
            <div className='likebtn'>
                <button style={{color:'rgba(51, 160, 255, 1)'}} onClick={() => dispatch(togleWishlist(item))} >{wish.some(w => w.id === item.id) ?<IoHeart /> :<IoHeartOutline /> }</button>
                <button style={{color:'rgba(51, 160, 255, 1)'}} onClick={() => dispatch(addToCart(item))} >{carts.some(w => w.id === item.id) ? <IoCartSharp />:<IoCartOutline />}  </button>
            </div>
            <Link style={{textDecoration: 'none'}} to={`/product/${id}`}>
                <h5>{item.title.slice(0,20)}</h5>
            </Link>
            <Rating name="half-rating" defaultValue={0.5} precision={0.5} />
            <div className='price'>
                <p><span className='spanprice'>${item.price}</span> <span className='spancount'>${item.oldprice}</span> 24% off</p>
            </div>
        </li>
    ))
      const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
      const [count,setCount] = useState(1)
      let prs = pr.slice(4,8)
  return (
    <div className='sigleels'><br /><br /><br /><br /><br />
    <div className='navigs'>
      <p>Home / {category} / <span>{title}</span></p>
    </div><br /><br />
      <div className='singflex'>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='inf'>
            <h3>{title}</h3>
            <div className='rts'>
            <Rating name="half-rating" defaultValue={4} precision={0.5} />
            <p><span>0 reviews</span> Submit a review</p>
            </div>
            <div>
                <div className='ddd'><p>${price} <span className='sp2'>${oldprice}</span><span className='sp'>24% off</span></p> </div>
            </div>
            <div style={{display: 'flex'}}>
                Availability: <p>In stock</p> 
            </div>
            <div style={{display: 'flex', gap: '40px'}}>
                Category: <p>Accessories</p>
            </div>
            <div>
            Free shipping
            </div>
            <div>
                <div><div className="colors">
              <h4>Select Color:</h4>
              <Checkbox {...label} defaultChecked/>
              <Checkbox {...label} sx={{
          color: yellow[800],
          '&.Mui-checked': {
            color: yellow[600],
          },
        }}/>
              <Checkbox {...label} sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }} />
            </div></div>
            <div className='sel'>
                Size: <select name="" id="">
                    <option value="">XS</option>
                    <option value="">XL</option>
                </select>
            </div><br />
        <hr /><br />
        <div className='countbox'><br />
            <div className='counts'>
            <button disabled={count == 1} onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            </div>
                <div >
                <button className='likebtns' onClick={() => dispatch(addToCart(id))}>Add To Cart</button>
                <button className='lik' onClick={() => dispatch(togleWishlist(id))}>{wish.some(w => w.id == id) ?<IoHeart /> :<IoHeartOutline /> }</button>
                </div>
        </div><br />
        <div className='face'>
            <button><FaFacebookF /> Share On Facebook</button>
            <button style={{backgroundColor: 'rgba(3, 169, 244, 1)'}}><FaTwitter /> Share On Twitter</button>
        </div>
            </div>
        </div>
        <div className='bb'>
          <h3>BEST SELLER</h3><br /><br />
        <div className='bs'>
            <img src={img} alt="" />
            <Rating name="half-rating" defaultValue={0.5} precision={0.5} />
            <h5>{price} <span>{oldprice}</span></h5>
        </div>
        </div>
      </div><br /><br />

      <br /><br />
      <div className='infopr'>
      <h4>Product Informaton</h4>
      <p>{desc}</p>
      </div>
      <br /><br /><br />
      <div className='related'>
          <h3>RELATED PRODUCTS</h3>
<br />
          <ul className='listlar'>
            {
              prs
            }
          </ul>
      </div><br /><br /><br />
    </div>
  )
}

export default Single
