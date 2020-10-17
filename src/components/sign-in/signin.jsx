import React, { Component } from 'react'
import './signin.css'
import FormInput from '../formInput/formInput'
import CustomButton from '../CustomButton/CustomButton'
import {signInWithGoogle} from '../../firebase.utility/firebase.utility.js'

class SignIn extends Component {
    state = {
            email: '',
            password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
            this.setState({ email:'' , password:''})
        }

        OnHandleChange = (event) => {
        
        this.setState({ [event.target.name] : event.target.value  })
           // this.setState({ email: event.target.email , password: event.target.password})
           // this.setState({ [name] : value})
        }

    render() {
    return (
            <div className='sign-in'>
               
                <h1> I already have an account </h1>
                <span className='statement'> Signin with your email & password </span>

                <form className='forum' onSubmit={ this.handleSubmit }>
                    
                    <FormInput type="text" name='email' value={this.state.email} labal='E-mail' onChange={this.OnHandleChange}  required/>
                
                    <FormInput type="password" name='password'  value={this.state.password} labal='password'  onChange={this.OnHandleChange} required/>

                    <div className='Buttons'> 
                        <CustomButton type='submit'> Sign in </CustomButton>  
                        <CustomButton googleStyle onClick={signInWithGoogle}>  Sign in with Google </CustomButton>  
                    </div>
                   
                        
                </form>
                
            </div>
        )       
    }
  }
export default SignIn