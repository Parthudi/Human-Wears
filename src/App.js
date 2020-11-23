import React, { Component, Suspense } from 'react';
import HomePage from './pages/Homepage/homepage.component'
//import ShopPage from './pages/Shop/shop'
import {Route, Switch} from 'react-router-dom'
import HeaderCompo from './components/header/header'
//import SignInAndSignUp from './pages/signup-signin/signup-signin'
import { auth, CreateUserProfileDocument } from './firebase.utility/firebase.utility'
import Boot from './footer/footer'
import './App.css'

const SignInAndSignUp = React.lazy(() => import('./pages/signup-signin/signup-signin'))
const  ShopPage = React.lazy(() => import('./pages/Shop/shop'))

class App extends Component {

  state = {
    CurrentUser: null 
    }

    unSubscribeFromAuth = null

    componentDidMount() {
      this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        if(userAuth) {
          const userRef = await CreateUserProfileDocument(userAuth)

          userRef.onSnapshot(snapShot => {
            this.setState({

              CurrentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
            console.log(this.state)
         })
         
      }
    else {
      this.setState({ CurrentUser: userAuth })
    }  
     
      })
    }

    componentWillUnmount() {
      this.unSubscribeFromAuth()
    }
  render() {
    return (
    <React.Fragment>
      <div className='App' >
            <HeaderCompo currentSignOut={this.state.CurrentUser}/>

         <Switch>
            <Route path='/' exact component={HomePage}/>

            <Route path='/shop' exact  render={() => (
              <Suspense fallback= {() => <h1> Loading.... </h1>}>
                  <ShopPage /> 
              </Suspense>
              )} />

            <Route path='/login' exact render={() => (
              <Suspense fallback= {() => <h1> Loading.... </h1>}>
                  <SignInAndSignUp /> 
              </Suspense>
              )} />    
            
      
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

            <Route path='*'  render={() => {
              return <h1> 404 Error Page Not Found </h1>
                }} />
          </Switch> 

          
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>  <hr/>  <br></br> <Boot/>
      </div>
    </React.Fragment>
    );
  }
}

export default App;
