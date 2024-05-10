import { useEffect, useState } from "react";
import "./Checkout.css";
import { PatternFormat } from "react-number-format";
import { Link, useNavigate } from "react-router-dom";
function Checkout({ setCheck , cards }) {
  const [iplocation, setIplocation] = useState('');
  let navigate = useNavigate()
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    setIplocation(`Latitude: ${latitude}, Longitude: ${longitude}`)
  }
  function error() {
    console.log("Unable to retrieve your location");
    navigate('/')
    alert('Bizning saytdan foydalanish uchun yashash joyingizni korsating')
  }
  console.log(iplocation);
  // const {title} = cards
  const totalPrice = cards?.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemtitle = cards?.reduce((acc, item) => acc + item.title + ` , %0A `,'');
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState('');
  const [lname, setLname] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(9);
  let day = new Date().getDate().toString()
  let hour = new Date().getHours().toString()
  let minut = new Date().getMinutes().toString()
  let secund = new Date().getSeconds().toString()
  let bottoken = "7184939016:AAFQh1Y9yxheg1s4zCDJLoDKpoDeRbJzdiU";
  let chatid = "-4276829127";
  //updates: https://api.telegram.org/bot7184939016:AAFQh1Y9yxheg1s4zCDJLoDKpoDeRbJzdiU/getUpdates
  // https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]
  const handleOrder = () => {
    let text = "";
    text += `Familiyasi: ${fname} %0A`;
    text += `Ismi: ${lname} %0A`;
    text += `Email: ${email} %0A`;
    text += `Joylashuvi: ${address} %0A`;
    text += `Telefon raqami: ${number} %0A %0A`;
    text += `Mana shularni sotib olmoqchi: %0A %0A`;
    text += `${itemtitle} %0A`;
    text += `Narxi: %0A`;
    text += `${totalPrice} %0A %0A`;
    text += `Buyurtma bergan vaqti: %0A`;
    text += `${day} : ${hour} : ${minut} : ${secund} %0A`;
    text += `Ip location %0A`;
    text += `${iplocation}`;
    let url = `https://api.telegram.org/bot${bottoken}/sendMessage?chat_id=${chatid}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    alert('Buturtma qabul qilindi, Tez orada aloqaga chiqamiz!')
    localStorage.removeItem('cart')
    navigate('/')
  };
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div className="overlay">
      <form onSubmit={handleOrder} action="" className="check__wrapper">
        <div className="rembt">
          <button
            type="button"
            onClick={() => {
              setCheck(false);
              window.scrollTo(0, 0);
              alert("Buyurtma bekor qilindi!");
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            type="button"
            onClick={() => {
              setCheck(false);
              window.scrollTo(0, 0);
              alert("Buyurtma bekor qilindi!");
            }}
          >
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
        <h2>Make Payment</h2>
        <div className="checkfl">
          <div className="selm">
            <div>
              <input
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
                type="name"
                name=""
                id=""
                placeholder="First Name"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="gmail"
                name=""
                id=""
                placeholder="Email Address"
              />
              <h4>Select Method of Payment</h4>
              <img src="List.svg" alt="" />
            </div>
          </div>
          <div className="sele">
            <input
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
              type="text"
              name=""
              id=""
              placeholder="Last Name"
            />
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              style={{ height: "100px" }}
              type="text"
              name=""
              id=""
              placeholder="Address for Delivery"
            />
            <PatternFormat
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              format="+998 (##) ###-##-##"
              placeholder="Phone number"
            />
            <Link to='https://t.me/+qVjFiiseIbpkZDk6'>
              BOT LINK
            </Link>
          </div>
        </div>
        <button className="sumbt" type="sumbit">
          Go to Payment
        </button>
      </form>
    </div>
  );
}

export default Checkout;
