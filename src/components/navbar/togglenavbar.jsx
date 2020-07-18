import React from 'react';
import {connect} from 'react-redux'
import ASB from '../../images/ASB.jpg'
import {LogOut} from '../customer/customerLogin/Logout'
import {Navbar,NavbarToggler,NavbarBrand,Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from 'reactstrap';
//import history from '../../router/history'

class Navigation extends React.Component{
constructor(props){
 super(props)
 //const [Logger, setIsOpen] = useState(true);
 //const toggle = () => setIsOpen(!Logger);
 //const item = false;
    this.state = {
    }
}
render(){
    return (
      <div>
        {console.log(this.props.status)}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" ><img src={ASB} width ="80px" alt=""/>ASB</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />         
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/Home/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ASB"> ASB</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact"> Contact Us</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="#">Setting</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/Login">Login</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    {
                      this.props.status?
                  <NavLink href="#" onClick={LogOut} >Logout</NavLink>
                  :null
                    }
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText><input type="text" placeholder="Search"></input></NavbarText>    
        </Navbar>
      </div>
    );   
   }
  }

  function mapStatetoProps(state){
    return {
             status : state.status.track
       }
  }
export default connect(mapStatetoProps)(Navigation);