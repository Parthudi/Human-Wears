import React from 'react'
import './CollectionItem.css'

const CollectionItem = (props) => {
 
    return(

        <div className='collection-item'>
            
                <div className='image' style={{backgroundImage : `url(${props.imag})`}} /> 

                <div className='collection-footer'>

                    <span className='name'> {props.namee} </span>
                    <span className='price'> {props.pricee} </span>

                </div>
                
        </div>
    )
}

export default CollectionItem