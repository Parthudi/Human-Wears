import React, { Component } from 'react';
import HomePage from './pages/Homepage/homepage.component'
import ShopPage from './pages/Shop/shop'
import {Route} from 'react-router-dom'
//import imag from './images/shopping.jpg'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className='App' /* style={{backgroundImage:  `url(${imag})`, backgroundSize: '100%', backgroundRepeat: 'repeat-y'}} */>
            <Route path='/' exact component={HomePage}/>

            <Route path='/shop' exact component={ShopPage}/>

            <Route path='/shop/hats' render={(props) => {
              console.log(props)
              return <h1> show hats </h1>
               }}/>  
            <Route path='/shop/jackets' render={(props) => {
              console.log(props)
              return <h1> show jackets </h1>
               }}/>
            <Route path='/shop/sneakers' render={(props) => {
              console.log(props)
              return <h1> show sneakers </h1>
               }}/>
            <Route path='/shop/womens' render={(props) => {
              console.log(props)
              return <h1> show womens </h1>
               }}/>
            <Route path='/shop/mens' render={(props) => {
              console.log(props)
              return <h1> show mens </h1>
               }}/>
           
          
      </div>
    );
  }
}

export default App;
