import React, { Component } from 'react';
import ApiService from "../../../service/ApiService";

class UpdateCustomerAccount extends Component {
    constructor(props) {
        super(props)
         this.state={
               user:'',
         }
    }

    UpdateCustomer = (e) =>
    {
        ApiService.UpdateCustomer(this.state.user);
    }

    render() {
        return (
            <div>
                <br></br><h2>UPDATE ACCOUNT INFORMATION</h2><br></br><br></br><br></br>
                <h3>FirstName</h3><br></br>
                <h3>Lastname</h3><br></br>
                <h3>Username</h3><br></br>
                <h3>Password</h3><br></br>
                <h3>Email</h3><br></br><br></br>

                <button>UPDATE</button>
            </div>
      )
    }

}
export default UpdateCustomerAccount;