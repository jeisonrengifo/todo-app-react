import React, {Component} from 'react'
import './todo.css'

class Login extends Component{
    constructor(){
        super();
        this.state={
            user:'alex',
            password:'',
            hasLoginFailed:false,
            showSuccesMessage:false

        }
        
        this.handleChange=this.handleChange.bind(this)
        this.buttonClicked=this.buttonClicked.bind(this)
    }
    render(){
        return(
            <div className="loginComponent">
                {this.state.hasLoginFailed && <div>Invalid credentials</div>}
                {this.state.showSuccesMessage && <div>Login Succesful!</div>}
               {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowSuccesMessage showSuccesMessage={this.state.showSuccesMessage}/>*/}
               User <input type="text" name="user" className="user" value={this.state.user} onChange={this.handleChange}/>
               Password<input type="password" name="password" className="password" value={this.state.password} onChange={this.handleChange}/> 
               <button name="btn-login" onClick={this.buttonClicked}>Login</button>
            </div>
        )
    }

   handleChange(event){
       this.setState({
            [event.target.name]:event.target.value
       })
       //console.log(event.target.value)
   }

   buttonClicked(){
      if(this.state.user==='alex' && this.state.password==='nirv'){
          this.setState({showSuccesMessage:true})
          this.setState({hasLoginFailed:false})
      }else{
            this.setState({showSuccesMessage:false})
            this.setState({hasLoginFailed:true})
          }      
          
   }  
   
}
//Another way to implemented it
// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid credentials</div>
//     }else
//     return null
// }

// function ShowSuccesMessage(props){
//     if(props.showSuccesMessage){
//         return <div>Login Succesful!</div>
//     }else
//         return null
// }

export default Login