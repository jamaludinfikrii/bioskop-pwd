import React, { Component } from 'react'
import {Paper} from '@material-ui/core'
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className='container'>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-6'>
                    <Paper className='p-5'>
                    <h1> LOGIN </h1>
                    <input className='form-control mt-3' type='text' placeholder='username' />
                    <input className='form-control mt-3' type='text' placeholder='password' />
                    <input type='button' className='btn btn-primary mt-5' value='Login' />
                    </Paper>
                    <p className='mt-3' style={{fontStyle:'italic'}}>
                        Belum Punya Akun ? 
                        <Link to='/register'>
                        <span style={{color:'blue',fontWeight :"bolder" , textDecoration:'underline',cursor:'pointer'}}> 
                            Register Now 
                        </span>
                        </Link>
                    </p>
                </div>
            </div>
            </div>
        )
    }
}

export default Login
