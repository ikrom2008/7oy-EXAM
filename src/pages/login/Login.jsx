import { TextField } from '@mui/material'
import './Login.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
    let us = JSON.parse(localStorage.getItem('user'))
    const [name,setName] = useState(us ? us.name : '')
    const [password,setPassword] = useState(us ? us.password : '')
    const [user,setUser] = useState(us ? us.user : '')
    let navigate = useNavigate()
    useEffect(() => {
      window.scrollTo(0,0)
    },[])
  return (
    <div className="login">
      <div className='log'>
      <TextField id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)}  label="Username" variant="outlined" fullWidth />
      <TextField  id="outlined-basic" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" fullWidth />
      <select name="" id="" value={user} onChange={(e) => setUser(e.target.value)}>
        <option value="">Role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={() => {
        if (name && password && user) {
            if (user == 'admin') {
                navigate('/admin')
            localStorage.setItem('user', JSON.stringify({name , password , user}))
            }else{
                navigate('/')
            localStorage.setItem('user', JSON.stringify({name , password , user}))
            }
            localStorage.setItem('user', JSON.stringify({name , password , user}))
        }
      }}>LOGIN</button>
      </div>
    </div>
  )
}

export default Login
