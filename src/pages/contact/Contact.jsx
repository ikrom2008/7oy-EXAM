import { TextField } from '@mui/material'
import'./Contact.css'
function Contact() {
  return (
    <div className='contcontainer'>
        <div className='cont'>
      <br />
      <div className='boxx'>
            <h2>get in touch</h2>
            <p>contact@e-comm.ng</p>
            <p>+234 4556 6665 34</p>
            <p>20 Prince Hakerem Lekki <br />Phase 1, Lagos.</p>
      </div>
      <div className='inputss'>
      <TextField fullWidth id="outlined-basic" label="Fullname" variant="outlined" placeholder='Fullname' defaultValue={'James Doe'} />
      <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" placeholder='Email' />
      <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={7}
          fullWidth
        />
      </div>
    </div>
    <div className='src'>
        <input type="text" name="" id="" placeholder='Search query...' /><button>Search</button>
    </div><br /><br /><br /><br /><br />
    </div>
  )
}

export default Contact
