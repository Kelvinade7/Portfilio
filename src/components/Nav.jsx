import React from 'react'
import{FaTimes} from'react-icons/fa'
import{Link} from'react-scroll'

const Nav = ({off}) => {
  return (
    <div className='nav2'>
          <div id='t'>
          <div id='logo'>WMA</div>
          <div>
          <ul className='flex'>
          <li id='list'><Link id='list' to="home" spy={true} smooth={true} offset={-270} duration={500}>Home</Link></li>
          <li id='list'><Link id='list' to="about" spy={true} smooth={true} offset={-160} duration={500}>About</Link></li>
          <li id='list'><Link id='list' to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link></li>
          <li id='list'><Link id='list' to="work" spy={true} smooth={true} offset={-99} duration={500}>Work</Link></li>
          <li id='list'><Link id='list' to="contact" spy={true} smooth={true} offset={-150} duration={500}>Contacts</Link></li>
        </ul>
      </div>
          <div id='bars' onClick={off} ><FaTimes/></div>
          </div>
          <center>
          <ul className='next'>
          <li onClick={off} id='list'><Link id='list' onClick={off}  to="home" spy={true} smooth={true} offset={-150} duration={500}>Home</Link></li>
          <li onClick={off} id='list'><Link id='list' onClick={off}  to="about" spy={true} smooth={true} offset={-120} duration={500}>About</Link></li>
          <li onClick={off} id='list'><Link id='list' onClick={off}  to="skills" spy={true} smooth={true} offset={-120} duration={500}>Skills</Link></li>
          <li onClick={off} id='list'><Link id='list' onClick={off}  to="work" spy={true} smooth={true} offset={-120} duration={500}>Work</Link></li>
          <li onClick={off} id='list'><Link id='list' onClick={off}  to="contact" spy={true} smooth={true} offset={-150} duration={500}>Contacts</Link></li>
        </ul>
        </center>
        
    </div>
  )
}

export default Nav