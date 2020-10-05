import React from 'react'
import Directory from '../../components/directory/directory'
import './homepage.styles.css';

const HomePage = (props) => {
    console.log(props)
    return(
        
        <div className='homepage'>

            <Directory />
            
        </div>
    )
}

export default HomePage