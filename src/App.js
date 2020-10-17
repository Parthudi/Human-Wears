import React, { Component } from 'react';
import HomePage from './pages/Homepage/homepage.component'
import ShopPage from './pages/Shop/shop'
import {Route, Switch} from 'react-router-dom'
import HeaderCompo from './components/header/header'
import SignIn from './components/sign-in/signin'
import { auth } from './firebase.utility/firebase.utility'
import './App.css'


class App extends Component {

  state = {
    CurrentUser: null 
    }

    unSubscribeFromAuth = null

    componentDidMount() {
      this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
        this.setState({ CurrentUser: user })

        console.log(user)
      })
    }

    componentWillUnmount() {
      this.unSubscribeFromAuth()
    }
  render() {
    return (
       
      <div className='App' >
            <HeaderCompo currentSignOut={this.state.CurrentUser}/>

         <Switch>
            <Route path='/' exact component={HomePage}/>

            <Route path='/shop' exact component={ShopPage}/>

            <Route path='/signin' component={SignIn} />
            
      
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
          </Switch> 
         
      </div>

    );
  }
}

export default App;
