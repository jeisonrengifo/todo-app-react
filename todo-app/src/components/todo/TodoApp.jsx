import React, {Component} from 'react'
import Login from './Login'
import { render } from '@testing-library/react'
import LoginPrac from './Login'
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import './WelcomeComponent'
import Welcome from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import TodoListComponent from './TodoListComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import LogOutComponent from './LogOutComponent'



class TodoApp extends Component{
    render(){
        return(
            <div className="login">
                
                    <BrowserRouter>
                        <HeaderComponent/>  
                        <>
                        <Switch>
                            <Route path="/" exact component={Login}/>
                            <Route path="/login"  component={Login}/>
                            <Route path="/welcome" component={Welcome}/> 
                            <Route path="/todo" component={TodoListComponent}/> 
                            <Route path="/logout" component={LogOutComponent}></Route>                           
                            <Route component={ErrorComponent}></Route>
                        </Switch>
                        </>
                    </BrowserRouter>
                <FooterComponent/>
            </div>               
            
     );
    }
}

export default TodoApp
        


