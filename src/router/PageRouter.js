import React from 'react';
import history from './history';
import Home from './homePage/Home';
import Account from './accountPage/Account'
import Services from './servicesPage/Services';
import Security from './securityPage/Security'
import { Router, Route, Switch } from 'react-router-dom';
import Login from '../components/customer/customerLogin/Login';
import CreateCustomerAccount from '../components/customer/createAccount/CreateAccount.jsx';
import ViewCustomerAccount from '../components/customer/viewAccount/ViewCustomer.jsx';
import DeleteCustomerAccount from '../components/customer/deleteAccount/DeleteCustomer';
import UpdateCustomerAccount from '../components/customer/updateAccount/UpdateCustomer';

const RouterApp = () => {
    return (
        <div>
            <Router history={history}>
            <Switch> 
                    <Route path="/Home" component={Home} />
                    <Route path="/Login" component={Login} />                     
                    <Route path="/Account" component={Account} />
                    <Route path="/Security" component={Security} />   
                    <Route path="/Services" component={Services} />                   
                    <Route path="/CreateAccount" component={CreateCustomerAccount} />
                    <Route path="/ViewAllAccounts" component={ViewCustomerAccount} />
                    <Route path="/DeleteAccount" component={DeleteCustomerAccount} />
                    <Route path="/UpdateAccount" component={UpdateCustomerAccount} />
                    
                 
            </Switch>
        </Router>
       </div>
    )
}

export default RouterApp;