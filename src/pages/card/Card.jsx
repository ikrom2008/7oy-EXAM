import { useDispatch, useSelector } from 'react-redux'
import './Card.css'
import { decCart, incCart, removeFromCart } from '../../components/context/cartSlice';
import { useEffect, useState } from 'react';
import Empty from '../../components/empty/Empty';
import Checkout from '../../components/checkout/Checkout';

function Card() {
  const [promo , setPromo] = useState('')
  const [count , setCount] = useState(0)
  const [check, setCheck] = useState(null)
  let dispatch = useDispatch()
  let cards = useSelector(state => state.cart.value)
  const totalPrice = cards.reduce((acc, item) => acc + item.price * item.quantity, 0);
  function prom()  {
    if (promo == 'laylo') {
         setCount(totalPrice / 2)
    }
}
useEffect(() => {
  window.scrollTo(0,0)
},[])
  let cpr = cards?.map((item) => (
    <li key={item.id} className='clist'>
          <div className='ctitle'>
            <div>
            <button onClick={() => dispatch(removeFromCart(item))}>X</button>
            <img src={item.img} alt="" />
            <h5>{item.title}</h5>
            </div>
          </div>
          <div className='cprice'>
            <p>${item.price * item.quantity}</p>
            <div>
              <button  onClick={() => {
                dispatch(decCart(item))
                item.quantity === 1 ? dispatch(removeFromCart(item)) : ''
              }}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => dispatch(incCart(item))}>+</button>
            </div>
            <p>${item.price}</p>
          </div>
          <br /> <hr /> <br />
    </li>
  ))
  if (cards.length > 0) {
    return (
      <div className='card'>
        {
          check && <Checkout setCheck={setCheck} cards={cards} />
        }
        <div className='navigs'>
        <p>Home / Hot Deal / <span>Nike Airmax 270 React</span></p>
      </div>
      <div className="producttype">
        <div>
          <h3>PRODUCT</h3>
        </div>
        <div>
          <h3>PRICE</h3>
          <h3>QTY</h3>
          <h3>UNIT PRICE</h3>
        </div>
      </div>
      <ul className='clists'>
      {cpr}
      </ul> <hr />
      <div className='prsss'>
        <div className='inp'>
          <input value={promo} type="text" name="" id="" placeholder='Voucher code' onChange={(e) => setPromo(e.target.value)} />
          <button onClick={() => prom()}>Redeem</button>
        </div>
        <div className='subtotal'>
            <div>
              <p>Subtotal <span>{totalPrice}</span></p>
              <p style={{gap: '40%'}}>Shopping fee <span>$20</span></p>
              <p style={{gap: '55%'}}>Cupon <span>{count > 0 ? 'Yes' : 'No'}</span></p>
            </div> 
            <hr />
            <div className='tot'>
              <h3>TOTAL <span>${count > 0 ? count : totalPrice}</span></h3>
              <button onClick={() => {
                setCheck(true)      
                  window.scrollTo(0,0)
              }}>Check out</button>
            </div>
        </div>
      </div><br /><br /><br />
      </div>
    )
  }else{
    return(
      <>
       <Empty />
    </>
    ) 
  }
}

export default Card
