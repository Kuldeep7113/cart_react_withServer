import React from 'react'
import{Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const Navigation = () => {
    const { loginWithRedirect, logout, isAuthenticated} = useAuth0();
    const cartStyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px'
      }
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to='/'>           
            <img style={{height:45}} src='/images/logo.png' alt='logo'/>
        </Link>
        <ul className="flex items-center">
            <li>
                <Link to = '/'>Home</Link>
            </li>
            <li className='ml-6'>
                <Link to = '/Products'>Products</Link>
            </li>
            <li className='ml-6'>
            <Link to='/cart'>
                <div style={cartStyle}>
                    <span>10</span>
                    <img src='images/cart.png' alt='cart'/>
                </div>
            </Link>
            </li>
            {
             isAuthenticated ? <li>
             <button
               className="bg-yellow-500 py-1 px-4 rounded-full font-bold"
               onClick={() => {
                 localStorage.clear();
                 logout({ logoutParams: { returnTo: window.location.origin } });
               }}
             >
               Log Out
             </button>
           </li>  :   <li>
                    <button className='bg-yellow-500 py-1 px-4 rounded-full font-bold' onClick={() => loginWithRedirect()}>Log In</button>
                   </li> 
            }           
            
        </ul>
        <div>
        </div>
    </nav>
  )
}

export default Navigation