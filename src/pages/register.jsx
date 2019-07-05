import React, { Component } from 'react'
import {Paper} from '@material-ui/core'
import { Link } from 'react-router-dom'

// Ambil Input Value
// klik register
// Password dan confirm password harus sama
// Di Check Username udah ada atau belum di json server
// kalau udah ada munculkan error msg
// kalo belum ada simpan datanya, dan login

class Register extends Component {
    state = {
        error : ''
    }
    onBtnClickRegister = () => {
        var username = this.refs.username.value
        var password = this.refs.password.value
        var confirm = this.refs.confirm.value
        if(confirm !== password){
            this.setState({error : 'Password and confirm password must be same'})
        }
    }

    // BIKIN FUNCT
    // renderErrorMessege = () => {
    //     if(this.state.error === ''){
    //         return null
    //     }else{
    //         return <div className='alert alert-danger mt-3'>{this.state.error}</div>
    //     }
    // }
    render() {
        // BIKIN VARIABEL
        // const error = this.state.error === '' ? null : <div className='alert alert-danger mt-3'>{this.state.error}</div>
        return (
            <div className='container'>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-6'>
                    <Paper className='p-5'>
                    <h1> REGISTER </h1>
                    <input ref='username' className='form-control mt-3' type='text' placeholder='username' />
                    <input ref='password' className='form-control mt-3' type='password' placeholder='password' />
                    <input ref='confirm' className='form-control mt-3' type='text' placeholder='confirm password' />
                    {
                        // error
                        // this.renderErrorMessege()
                        this.state.error === '' ? null :
                        <div className='alert alert-danger mt-3'>{this.state.error}</div>
                    }
                    <input type='button' onClick={this.onBtnClickRegister} className='btn btn-primary mt-3' value='Register Now' />
                    </Paper>
                    <p className='mt-3' style={{fontStyle:'italic'}}>
                        Sudah Punya Akun ? 
                        <Link to='/login'>
                        <span style={{color:'blue',fontWeight :"bolder" , textDecoration:'underline',cursor:'pointer'}}> 
                            Login Now 
                        </span>
                        </Link>
                    </p>
                </div>
            </div>
            </div>
        )
    }
}

export default Register
