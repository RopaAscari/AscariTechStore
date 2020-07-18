import React from '../../../node_modules/react'

class Home extends React.Component{

    constructor(props){
        super(props)
        
        this.state={
            
            renderSignUp:false,
            renderLogin:false,
        }
    }

  SignUp =()=>{
    this.setState({renderSignUp: !this.state.renderSignUp})
    this.props.history.push('/CreateAccount');
  }

  Login(){
    this.setState({renderLogin: !this.state.renderLogin})
    this.props.history.push('/Login');
  }



    render(){
        return(
            <div>
                <br></br><br></br><br></br><br></br><center><h1>HOME</h1></center><br></br><br></br>
               
            </div>
        )
    }
}
export default Home;