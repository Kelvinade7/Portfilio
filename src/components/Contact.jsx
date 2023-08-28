import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
          <center>
                <h2 className='m-h'>Contacts</h2>
                <p style={{color:'red'}} className='a-p'>Send me an email</p>
          </center>
        <form action='https://getform.io/f/4a0a9513-4b83-4d81-b8f4-7e5aa593c13a' method='POST'>
            <div className='inp'>
              <input className='input'type='text' placeholder='Name' name='name'/><br/>
              <input className='input' type='email' placeholder='Email' name='email'/><br/>
              <textarea rows={7} placeholder='message' className='input'/><br/>
              <button type='submit' id='me'>Let's Work Together</button>

            </div>                        
        </form>
        <br/>
        <br/> <br/>
        <br/>

    </div>
  )
}

export default Contact