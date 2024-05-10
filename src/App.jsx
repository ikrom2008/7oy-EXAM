import './App.css'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import Single from './components/single/Single'
import { useEffect, useState } from 'react'
import Contact from './pages/contact/Contact'
import Card from './pages/card/Card'
import Wishlist from './pages/wishlist/Wishlist'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import Loading from './components/loading/Loading'

let url = 'https://6634b1db9bb0df2359a26989.mockapi.io/api/users'
function App() {
  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(false)
  const fetchdata = async () => {
    setLoading(true)
    try {
     const resp = await fetch(url)
     const data = await resp.json()
     
     setProduct(data)
     setLoading(false)
    } catch (error) {
     console.log(error);
     setLoading(false)
    }
   }
   useEffect(()=>{
       fetchdata()
   },[])

   if(loading){
    return(
      <Loading />
    )
   }else{
    return (
    <>
    <div className='container'>
      <Header />
        <Routes>
          <Route path='/'  element={
            <div>
              <Hero />
              <Main product={product} />
            </div>
          }/>
          <Route path='/product/:id' element={<Single product={product} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/card' element={<Card />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
    </div>
      <Footer />
    </>
  )
   }
  
}

export default App
