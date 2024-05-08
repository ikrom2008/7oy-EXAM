import { Rating } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { togleWishlist } from "../../components/context/wishlistSlice"
import { addToCart } from "../../components/context/cartSlice"
import { IoCartOutline, IoCartSharp, IoHeart, IoHeartOutline } from "react-icons/io5"
import Empty from "../../components/empty/Empty"
import './Wishlist.css'
function Wishlist() {
    let wishes = useSelector(state => state.wishlist.value)
    let carts = useSelector(state => state.cart.value)
    let dispatch = useDispatch()
    let prs = wishes?.map((item) => (
        <li key={item.id} className='list'>
            <img src={item.img} alt="" />
            <div className='likebtn'>
                <button style={{color:'rgba(51, 160, 255, 1)'}} onClick={() => dispatch(togleWishlist(item))} >{wishes.some(w => w.id === item.id) ?<IoHeart /> :<IoHeartOutline /> }</button>
                <button style={{color:'rgba(51, 160, 255, 1)'}} onClick={() => dispatch(addToCart(item))} >{carts.some(w => w.id === item.id) ? <IoCartSharp />:<IoCartOutline />}  </button>
            </div>
            <Link style={{textDecoration: 'none'}} to={`/product/${item.id}`}>
                <h5>{item.title}</h5>
            </Link>
            <Rating name="half-rating" defaultValue={0.5} precision={0.5} />
            <div className='price'>
                <p><span className='spanprice'>${item.price}</span> <span className='spancount'>${item.oldprice}</span> 24% off</p>
            </div>
        </li>
    ))
  if (wishes.length > 0) {
    return (
        <div className="wishlist"><br /><br /><br /><br /><br /><br />
            <h2>Wishlist</h2>
            <br /><br /><br />
          <ul className="lists">
            {prs}
          </ul><br /><br /><br />
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

export default Wishlist
