import React, { Component } from 'react';
import ApiService from "../../../service/ApiService";
import styles  from './CreateAccount.module.scss'
//import Login from '../customerLogin/Login';

class CreateCustomerAccount extends Component {

    constructor(props) {
        super(props)
        
        this.state = {      
            
                firstname: '',
                lastname: '',
                username: '',
                password: '',
                email: '',
                message: '',     
        }    
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    AddCustomer = (e) => {
        try {
            e.preventDefault();
            let customer = { firstname: this.state.firstname, lastname: this.state.lastname, username: this.state.username, password: this.state.password, email: this.state.email };
            ApiService.AddCustomer(customer).then(res => {
                this.setState({ message: 'User sucesfully added!!' })
                console.log(this.state.message);
                this.props.history.push('/Login');
            });
            console.log(customer)
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className="">
                    <div className={styles['Login']}>
                        <form onSubmit={this.handleSubmit}>
                            <br></br><br></br><br></br><br></br>
                            <h1>JOIN US FOR FREE</h1>
                        <br></br><br></br><br></br><br></br>
                        <label className={styles['Field-label']}>First Name</label><br></br>
                            <input className={styles['input-add']} type="text" name="firstname" value={this.state.firstname} onChange={this.onChange} /><br></br><br></br>
                        <label className={styles['Field-label']}>Last Name</label><br></br>
                            <input className={styles['input-add']} type="text" name="lastname" value={this.state.lastname} onChange={this.onChange} ></input><br></br><br></br>
                        <label className={styles['Field-label']}>Username</label><br></br>
                            <input className={styles['input-add']} type="text" name="username" value={this.state.username} onChange={this.onChange} ></input><br></br><br></br>
                        <label className={styles['Field-label']}>Password</label><br></br>
                            <input className={styles['input-add']} type="text" name="password" value={this.state.password} onChange={this.onChange} ></input><br></br><br></br>
                        <label className={styles['Field-label']}>Email Address</label><br></br>
                            <input className={styles['input-add']} type="text" name="email" value={this.state.email} onChange={this.onChange} ></input><br></br><br></br>
                        <br></br><button className="" onClick={this.AddCustomer}>SIGN UP</button>                         
                    </form>
                    </div>
                </div>             
            </React.Fragment>
        );
    }
}

export default CreateCustomerAccount;