import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <center>
        <ul >
       <Link  to = "/"> <li>HOME</li></Link>
       <Link  to = "/DASHBOARD"> <li>DASHBOARD</li></Link>
       <Link  to = "/HEADER"> <li>HEADER</li></Link>
       <Link  to = "/FOOTER"> <li>FOOTER</li></Link>   
          </ul>
        </center>

    </div>
  )
}

export default Navbar
