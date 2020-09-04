import axios from 'axios'
class AuthenticationService{
    
    logSuccessFull(user,password){
       
        sessionStorage.setItem('authenticatedUser',user);
        sessionStorage.setItem('logIn',true);    
        
        this.setupAxiosInterceptor(this.createBasicAuthToken(user,password))
    }

    executeBasicAuthentication(user,password){
        return axios.get("http://localhost:8080/basicauth",{
            headers:{
                authorization:this.createBasicAuthToken(user,password)
            }
        });
    }

    createBasicAuthToken(user,password){
        return 'Basic ' + window.btoa(user + ":" + password);
         
    }

    logOut(){
        sessionStorage.removeItem('authenticatedUser');
    }
    isUserLogIn(){  
        let user =  sessionStorage.getItem('authenticatedUser');     
        if(user===null) return false;
        else  return true;
    }

    getLoggedInUserName(){
        let user =  sessionStorage.getItem('authenticatedUser');     
        if(user===null) return '';
        else  return user;
    }

    setupAxiosInterceptor(basicAuthHeader){       
        axios.interceptors.request.use(
            (config)=>{
                if(this.isUserLogIn()){
                    config.headers.authorization = basicAuthHeader
                }
               return config;
            }
        )

    }
}

export default new AuthenticationService()