import { auth } from '../../firebase.utility/firebase.utility';
import React from 'react';
import {Link} from 'react-router-dom';
import  ReactLogo from '../../assets/Crown.js';
import './header.css'

const HeaderCompo = (props) => {
    return(
        
        <div className="header">

            <Link className='logo-container' to='/'>
                <ReactLogo className='logo' />
            </Link>
            
            <div className='tit'>
                    <h1> HUMANS WEAR </h1>
            </div>

            <div className='options'>
                <Link className='option'  to='/shop'>
                        SHOP
                </Link>
                <Link className='option' to='/shop'>
                        CONTACT    
                </Link> 
                {
                    props.currentSignOut ? (
                        <div className='option' onClick={() => auth.signOut()}> 
                            SIGN OUT
                        </div>
                  )   :   (
                <Link className='option' to='/login'>
                    SIGN IN
                </Link>
                    )
                }
                
            </div>
        </div>
       
    )
}    

export default HeaderCompo