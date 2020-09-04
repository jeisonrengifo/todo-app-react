
import axios from 'axios';
class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/helloWorld');
        
    }   

    executeHelloWorldBean(){
        return axios.get('http://localhost:8080/helloWorldVar/Jass');
    }

    executeHelloWorldPathVariable(name){
        return axios.get(`http://localhost:8080/helloWorldVar/${name}`);
    }
}
export default new HelloWorldService()