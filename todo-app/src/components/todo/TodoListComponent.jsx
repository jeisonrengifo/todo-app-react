import React,{Component} from 'react'

class TodoListComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            todoList:
            [
            {id:1, description:"Learn React", done:false, targetDate:new Date()},
            {id:2, description:"Learn Spring Boot", done:false, targetDate:new Date()},
            {id:3, description:"Get Money", done:false, targetDate:new Date()}
           ]
        }
        
    }
    render(){
        return(
            <div> 
                <h1>Todo List</h1>
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
                                <tr>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr> 
                                )
                            }
                        </tbody>
                    </table>
                </div>      
            </div>
        )
    }
}

export default TodoListComponent