import React,{Component} from 'react'
import moment from 'moment'
import { Formik,Form,Field,ErrorMessage} from 'formik';
import AuthenticationService from './AuthenticationService.js'
import TodoDataService from '../../api/todo/todoDataService.js';
import todoDataService from '../../api/todo/todoDataService.js';

class TodoComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            id:this.props.match.params.id,
            description:'',
            targetDate: moment( new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.validate=this.validate.bind(this)
    }

    componentDidMount(){
        let userLogged=AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveTodo(userLogged,this.state.id)
        .then(response=>this.setState({
            description:response.data.description,
            targetDate:moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
    }
    onSubmit(values){
        let userLogged=AuthenticationService.getLoggedInUserName(); 
        let todo ={
                id:this.state.id,
                description:values.description,
                targetDate:values.targetDate
        }
        
        if(this.state.id===-1){
                todoDataService.createTodo(userLogged,todo).then(() => this.props.history.push('/todo'))
        }else{
                todoDataService.updateTodo(userLogged,this.state.id,todo).then(() => this.props.history.push('/todo'))     
            } 
    }

    validate(values){
        let errors={}
        if(!values.description){
                errors.description='Please enter a description!'
        }else if(values.description.length < 5){
                errors.description='The length of the description have to be lower than 10 characters!'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate='Please enter a valid date!'
        }

        
        
        return errors;
    }
    render(){
        let {description,targetDate}=this.state
        

                return( 
                        <div>
                            <h1>Todo</h1>
                            <div className="container">
                                <Formik 
                                    initialValues={{description,targetDate}}
                                    onSubmit={this.onSubmit}
                                    validateOnChange={false}
                                    validateOnBlur={false}
                                    validate={this.validate}
                                    enableReinitialize={true    }
                                >
                                    {
                                        (props)=>(
                                            <Form>
                                                <ErrorMessage name="description" component="div"
                                                                 className="alert alert-warning"/>
                                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                                <fieldset className='form-group'>
                                                    <label>Description</label>
                                                    <Field className="form-control" type="text" name="description"/>
                                                </fieldset>
                                                <fieldset className='form-group'>
                                                    <label>Target Date</label>
                                                    <Field className="form-control" type="date" name="targetDate"/>
                                                </fieldset>
                                                <button className="btn btn-success" type="submit">Save</button>
                                            </Form>
                                        )
                                    }
                                </Formik>

                            </div>
                        </div>
                    )
        
    }
}
export default TodoComponent