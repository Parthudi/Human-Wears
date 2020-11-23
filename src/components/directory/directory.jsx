import React, { Component } from 'react'
import MenuItems from '../menuItems/menuItems'
import Men from '../../images/parthudi.jpg'
import Hat from '../../images/myfinalhat.jpg'
import Sneaker from '../../images/myfinalsneaker.jpg'
import './directory.css'

class Directory extends Component {
        state = {
         sections : [
                {
                  title: 'hats',
                  imageUrl: Hat ,
                //  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: Sneaker ,
                 // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: Men ,
                 // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
              
        }
    render() {
         let menuitem =  this.state.sections.map((section) => {
                 return   <MenuItems 
                                title={section.title} 
                                key={section.id} 
                                image={section.imageUrl}
                                siz={section.size}
                                linku={section.linkUrl}/>
             })

        return(
            <div className='directory-menu'>
                        {menuitem}
            </div>
        )
    }
}

export default Directory