import React, { Component } from 'react'
import SHOP_DATA from './ShopData'
import CollectionPreview from '../../components/collectionpreview/collectionpreview'

class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
        }

    render() {
       let shopitem = this.state.collections.map((collection) => {
            return(
                <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>
            )
        })
        return(
            <div>
                {shopitem}

            </div>
         

        )
    }
}

export default ShopPage