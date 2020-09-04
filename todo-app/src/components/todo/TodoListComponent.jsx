import React,{Component} from 'react'
import moment from 'moment'
import TodoDataService from '../../api/todo/todoDataService.js'
import './AuthenticationService.js'
import AuthenticationService from './AuthenticationService.js'
import todoDataService from '../../api/todo/todoDataService.js'

class TodoListComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            todoList:
            [],
            message:null
        }
        this.deleteTodoOnclick=this.deleteTodoOnclick.bind(this);
        this.refreshTodo=this.refreshTodo.bind(this);
        this.addTodoOnclick=this.addTodoOnclick.bind(this)
    }
    //After render Constructor and render method this method is call
    componentDidMount(){
        if(this.state.id===-1){
            return
        }

        let userLogged=AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveAllTodos(userLogged)
        .then(response =>{
            this.setState({
                todoList:response.data
            })
        })
        .catch()
        
    }
    render(){
        return(
            <div> 
                <h1>Todo List</h1>
        {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todoList.map(
                                    todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                                    <td><button name="updateTodo" className="btn btn-success" 
                                    onClick={()=>this.updateTodoOnclick(todo.id)}>Update</button></td>
                                    <td><button name="deleteTodo" className="btn btn-warning" 
                                    onClick={()=>this.deleteTodoOnclick(todo.id)}>Delete</button></td>
                                </tr> 
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" text-align="center" onClick={this.addTodoOnclick}>Add Todo</button>
                    </div>
                </div>      
            </div>
        )
    }

    deleteTodoOnclick(id){
        let user = AuthenticationService.getLoggedInUserName();
        todoDataService.deleteTodo(user,id)
        .then(reponse => {
            this.setState({message:`Todo with id: ${id} delete it succesfuly`});
            this.refreshTodo();
        })       

    }
    addTodoOnclick(){
        this.props.history.push(`/todo/-1`);
      

    }

    updateTodoOnclick(id){
        this.props.history.push(`/todo/${id}`);
    }

    refreshTodo(){
        let userLogged=AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveAllTodos(userLogged)
        .then(response =>{
            this.setState({
                todoList:response.data
            })
        })
     

    }
}

export default TodoListComponent