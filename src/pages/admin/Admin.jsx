import { useNavigate } from 'react-router-dom'
import './Admin.css'
import { useEffect } from 'react'
function Admin() {
    let navigate = useNavigate()
    useEffect(() => {
      window.scrollTo(0,0)
    },[])
  return (
    <div className='admin'><br /><br /><br /><br /><br />
      <h2>
         Admin panel
      </h2>
     <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam <br /> iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit <br /> quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
     </p>
     <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam <br /> iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit <br /> quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
     </p>
     <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam <br /> iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit <br /> quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
     </p>
     <div>
     <button onClick={() => {
        navigate('/login')
        localStorage.removeItem('user')
     }}>Log out</button>
     </div>
    </div>
  )
}

export default Admin
