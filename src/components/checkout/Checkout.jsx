import { useState } from 'react'
import './Checkout.css'
import { PatternFormat } from 'react-number-format'
function Checkout({setCheck}) {
    const [fname,setFname] = useState()
    const [email,setEmail] = useState()
    const [lname,setLname] = useState()
    const [address,setAddress] = useState()
    const [number,setNumber ] = useState()
    let bottoken = '7184939016:AAFQh1Y9yxheg1s4zCDJLoDKpoDeRbJzdiU'
    let chatid = '-4276829127'
    //updates: https://api.telegram.org/bot7184939016:AAFQh1Y9yxheg1s4zCDJLoDKpoDeRbJzdiU/getUpdates
    // https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]
    let ob = {
      fname,
      email,
      lname,
      address,
      number
    }
    const handleOrder = () => {
      let url = `https://api.telegram.org/bot${bottoken}/sendMessage?chat_id=${chatid}&text=${fname}`
      let api = new XMLHttpRequest()
      api.open('GET' , url , true)
      api.send()
    }
  return (
    <div className="overlay">
      <form onSubmit={handleOrder()} action="" className='check__wrapper'>
        <div className='rembt'>
            <button type='button' onClick={() => {
                setCheck(false)
                window.scrollTo(0,0)
                alert('Buyurtma bekor qilindi!')
            }}><i className="fa-solid fa-arrow-left"></i></button>
            <button type='button' onClick={() => {
                setCheck(false)
                window.scrollTo(0,0)
                alert('Buyurtma bekor qilindi!')
            }}><i className="fa-solid fa-x"></i></button>
        </div>
        <h2>Make Payment</h2>
        <div className='checkfl'>
            <div className='selm'>
                <div>
                <input value={fname} onChange={(e) => setFname(e.target.value)} required type="text" name="" id="" placeholder='First Name' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} required type="text" name="" id="" placeholder='Email Address' />
                <h4>Select Method of Payment</h4>
                <img src="List.svg" alt="" />
                </div>
                
            </div>
            <div className='sele'>
                <input value={lname} onChange={(e) => setLname(e.target.value)} required type="text" name="" id="" placeholder='Last Name' />
                <input value={address} onChange={(e) => setAddress(e.target.value)} required style={{height: '100px'}} type="text" name="" id="" placeholder='Address for Delivery' />
                <PatternFormat value={number} onChange={(e) => setNumber(e.target.value)} format='+998 (##) ###-##-##' placeholder='Phone number' />
            </div>
        </div>
        <button className='sumbt' type='sumbit'>Go to Payment</button>
      </form>
    </div>
  )
}

export default Checkout
