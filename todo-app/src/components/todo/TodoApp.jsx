import React, {Component} from 'react'
import Login from './Login'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './WelcomeComponent'
import Welcome from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import TodoListComponent from './TodoListComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import LogOutComponent from './LogOutComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import TodoComponent from './TodoComponent'



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
                            <AuthenticatedRoute path="/welcome" component={Welcome}/> 
                            <AuthenticatedRoute path="/todo/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todo" component={TodoListComponent}/> 
                            <AuthenticatedRoute path="/logout" component={LogOutComponent}/>                          
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
        


