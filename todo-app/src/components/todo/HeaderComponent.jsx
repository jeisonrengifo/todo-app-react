import React,{Component} from 'react'
import '../../components/../bootstrap.css'
import { Link } from 'react-router-dom'




class HeaderComponent extends Component{
    render(){
        return(
               <header>
                
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://awakama.com/cafeland" className="navbar-brand">Awakama.com</a></div>
                        <ul className="navbar-nav">
                            <li className="nav-link"><Link to="/welcome">Home</Link></li>
                            <li className="nav-link"><Link to="/todo">Todo</Link></li>                            
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            <li className="nav-link"><Link to="/login">Login</Link></li>
                            <li className="nav-link"><Link to="/logout">LogOut</Link></li>
                        </ul>
                    </nav>
                    
            </header>
        )
    }
}

export default HeaderComponent 