import React from 'react'
import history from '../history'
 export default class Account extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
 
    ViewPush = () => {
        history.push("/ViewAllAccounts")
    }

    UpdatePush = () => {
        history.push("/UpdateAccount")
    }
    
    DeletePush = () => {
        history.push("/DeleteAccount")
    }
    
    SecurityPush = () => {
        history.push("/Security")
    }
    

    render(){
        return(
            <div>
                <br></br><br></br><br></br><br></br><br></br>
                <h6 onClick={this.ViewPush}>View Account Information</h6><br></br>
                <h6 onClick={this.UpdatePush}>Update Account Information</h6><br></br>
                <h6 onClick={this.DeletePush}>Delete Account </h6><br></br>
                <h6 onClick={this.SecurityPush}>Security</h6>
            </div>
        )
    }
}
