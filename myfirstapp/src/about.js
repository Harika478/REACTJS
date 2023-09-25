// function About(){
//     return(
//       <div style={{background:'green',color:'yellow'}}>
//               <h1> This is a new aboutpage</h1>

//               </div>
//     )
//   }
  
//   export default About

import React,{Component} from 'react'
 class about extends Component{
  render(){
    return(
      <div>
        <h1> This is a new about page with class component{this.props.name}</h1>
      </div>
    )
  }
 } 
 export default about