import React, {Component} from 'react'
import icon from '../../assets/icon.png'

export default class Navbar extends Component{
 render() {
  return (
   <div>
    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
     <a href='/' className='navbar-brand col-sm-5 col-md-2 mr-0 align-items-center'>  
      <img src={icon} alt='logo' />
     </a>
    </nav>
   </div>
  )
 }
}