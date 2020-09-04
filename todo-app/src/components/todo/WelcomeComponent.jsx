import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../../api/todo/HelloWorldService.js'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class Welcome extends Component{
    constructor(props){
        super(props)
        this.state={
            welcomeMessage:''
        }
        this.getWelcomeService=this.getWelcomeService.bind(this);
        this.handleSuccesResponse=this.handleSuccesResponse.bind(this);
        this.handleSuccesResponse=this.handleSuccesResponse.bind(this);
    }
    render(){
        return(
            <>
            <h1>Welcome</h1>
                <div className="container">Welcome TODO APP  you can manage your Todos:{this.props.match.params.user} <Link to="/todo">here</Link>
                </div>
                <div>
                    <button name="btn-service-call" className="btn" onClick={this.getWelcomeService}>Get welcom</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    // getWelcomeService(){
    //     HelloWorldService.executeHelloWorldBean().then(response => this.handleSuccesResponse(response))
    // }

    getWelcomeService(){
        HelloWorldService.executeHelloWorldPathVariable(this.props.match.name)
        .then(response => this.handleSuccesResponse(response))
        .catch(error=>this.handleError(error))
    }

    handleSuccesResponse(response){
        this.setState({
            welcomeMessage:response.data.message
        })
    }

    handleError(error){
        console.log(error.response.data.message);
    }
}

export default Welcome