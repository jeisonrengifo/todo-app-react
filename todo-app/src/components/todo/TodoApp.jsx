import React, {Component} from 'react'
import Login from './Login'
import { render } from '@testing-library/react'
import LoginPrac from './Login'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './WelcomeComponent'
import Welcome from './WelcomeComponent'

class TodoApp extends Component{
    render(){
        return(
            <div className="login">
                <Router>
                    <>
                    <Route path="/welcome" component={Welcome}/>
                    <Route path="/" exact component={Login}/>
                    <Route path="/login" exact component={Login}/>
                    </>
                </Router>
            </div>               
            
     );
    }
}
export default TodoApp
        


