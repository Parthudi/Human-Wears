import React from 'react'
import './menu-items.styles.css'

const MenuItems = (props) => {
    return(
        <div className={props.siz +' menu-item'}>

            <div className='background-image'  style={{backgroundImage : `url(${props.image})`}} >
        
            <div className='content'>
                <h1 className='title'> {props.title.toUpperCase()} </h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
            

        </div>
    )
}

export default MenuItems