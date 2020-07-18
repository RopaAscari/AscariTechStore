import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import React, { Component } from 'react'
import styles from './Login.module.scss'
import {store} from '././../../../index'
import ApiService from "../../../service/ApiService"
import {loginstat} from '../../../action/LoginAction'
import {SetCookieSession} from '../../../cookies/cookies.js'


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {

            username : '',
            password : '',
            storeduser:'',
            storedpass:'',
            rise:true,
            pass:true,
        }
    }

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    LoginCustomer = async (e) =>
    {
        e.preventDefault(); 
            //await new Promise(r => setTimeout(r, 10));
            ApiService.ViewSingleCustomer(this.state.username).then(res => {
                /*if(res.isConfirmed) 
                {
                    console.log("Username not found");
                }*/
                const credentials = res.data;
              
                this.setState({storedpass:credentials.password})
                
                if(this.state.storedpass===this.state.password)
                {
                   // const pass = this.state.storedpass
                    console.log("Logged in");
                    SetCookieSession({ credentials });
                    this.props.history.push("/Account");               
                    this.setState({pass : !this.state.pass})              
                }
                else{
                    console.log("Access Denied");
                   }        
               });                        
                this.checkloginstatus(this.state.pass);
    }


    checkloginstatus = (vari) => {   
        this.state.rise?           
           store.dispatch(loginstat(vari)) 
            :
            console.log("error")
    }


    render() {
        return (
            
            <div className={styles['Login']}>
                <form>
                    <h2>LOGIN</h2>
                    <input type="text" name="username" value={this.state.username} onChange={this.onChange} /><br></br><br></br>
                    <input type="text" name="password" value={this.state.password} onChange={this.onChange} /><br></br><br></br>
                    <button onClick={this.LoginCustomer
                    }>LOGIN</button> <br></br><br></br>
                    
                    <h5>Dont have an account yet? <a href='/CreateAccount'>Sign up</a></h5><br></br><br></br>              
                </form>
            </div>
       )
    }
}

const matchDispatchToProps = dispatch => {
    return {
        dispatch,
        ...bindActionCreators({loginstat},dispatch)
    }
}

export default connect(null,matchDispatchToProps)(Login);

