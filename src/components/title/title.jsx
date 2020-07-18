import React from '../../../node_modules/react'

class Doc extends React.Component{
    componentDidMount(){
      document.title = "ASB"
    }
  
    render(){
      return(   
          <div></div>
      )
    }
}  

export default Doc;