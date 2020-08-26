import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router'
import '../../components/../bootstrap.css'
import AuthenticationService from './AuthenticationService'




class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLogIn();
        console.log(isUserLoggedIn);
        return(
               <header>
                
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://awakama.com/cafeland" className="navbar-brand">Awakama.com</a></div>
                        <ul className="navbar-nav">
                           {isUserLoggedIn && <li className="nav-link"><Link to="/welcome">Home</Link></li>}
                           {isUserLoggedIn && <li className="nav-link"><Link to="/todo">Todo</Link></li>}                          
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li className="nav-link"><Link to="/login">Login</Link></li>}
                            {isUserLoggedIn && <li className="nav-link"><Link to="/logout" onClick={AuthenticationService.logOut}>LogOut</Link></li>}
                        </ul>
                    </nav>
                    
            </header>
        )
    }
}

export default withRouter(HeaderComponent) 