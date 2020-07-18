import DataTable from './data-table';
import React, { Component } from 'react';
import ApiService from "../../../service/ApiService";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class ViewCustomerAccount extends Component {
    constructor(props) {
        super(props)

        this.state = {
         
            user: '',
            allcustomers: [],
            customer:[],
            
        }
        this.SearchCustomer = this.SearchCustomer.bind(this);
    }


    onChange = (e) => {
        this.setState({ user: e.target.value })
    }


    FetchAllCustomers = () => {
       try {
            ApiService.ViewAllCustomers().then(response => {
            this.setState({allcustomers: response.data})
            })
            console.log(this.state.allcustomers);
        }catch (error){
            console.log(error);
        }
    }

    SearchCustomer = () => {
       
            ApiService.ViewSingleCustomer(this.state.user).then(res => {
                const customers = res.data;
                this.setState({ customer: customers });
                console.log(this.state.customer);
               // <ul>{this.state.customer.map(el => <li key={el.id}>{el.firstname}</li>)}</ul>;
            })
    }

    dataTable() {
        return this.state.allcustomers.map((data, id) => {
           return <DataTable obj={data} key={id} />
        });
    }

    render() {
        return (
            <div>
                <h2>
                <br></br><br></br><center>CLICK TO VIEW CUSTOMER ACCOUNTS</center>
                </h2><br></br>
                <br></br><center> <input type="text" name="username" value={this.state.user} onChange={this.onChange} /><br></br><br></br></center>
                <button onClick={this.FetchAllCustomers}>VIEW ALL</button>
                <button onClick={this.SearchCustomer}>SEARCH</button><br></br>
                
                <br></br><br></br><br></br><br></br>
              
                <MDBTable striped>
                        <MDBTableHead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                       
                            <th>Last Name</th>
                      
                            <th>UserName</th>
                      
                            <th>Password</th>
                      
                            <th>Email Address</th>
                        </tr>  
                </MDBTableHead>
           
                    <MDBTableBody>         
                        {this.dataTable()}
                    </MDBTableBody>
                </MDBTable>

                
             

            </div>
        )
    }
}
export default ViewCustomerAccount;