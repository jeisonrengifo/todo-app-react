class AuthenticationService{
    logSuccessFull(user,password){
        sessionStorage.setItem('authenticatedUser',user);
        sessionStorage.setItem('logIn',true);       
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
}

export default new AuthenticationService()