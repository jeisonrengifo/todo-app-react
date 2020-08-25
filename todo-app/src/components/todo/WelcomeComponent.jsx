import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Welcome extends Component{
    render(){
        return(
            <>
            <h1>Welcome</h1>
            <div className="container">Welcome TODO APP  you can manage your TOdos: <Link to="/todo">here</Link></div>
            </>
        )
    }
}

export default Welcome