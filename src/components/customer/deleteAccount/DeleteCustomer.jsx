import React, { Component } from 'react';
import ApiService from "../../../service/ApiService";

class DeleteCustomerAccount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            delete: ''
        }
    }

    onChange = (e) =>
        this.setState({ delete: e.target.value })

    DeleteCus = () => {
        ApiService.DeleteCustomer(this.state.delete).then(response => {
            if (response === true) {
                console.log(this.state.delete);
            }
        })
    }
    

    render() {
        return(
    
            <div>
                <h2>Delete Your Account</h2><br></br>
                <input type="text" name="delete" value={this.state.delete} onChange={this.onChange} /><br></br><br></br>
                <button onClick={this.DeleteCus}>DELETE</button>
            </div>
        )
      }
}
export default DeleteCustomerAccount;