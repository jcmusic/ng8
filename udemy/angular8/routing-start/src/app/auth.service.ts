export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }
    login(){
        this.loggedIn = true;
        this.logStatus();
    }
    logout(){
        this.loggedIn = false;
        this.logStatus();
    }
    logStatus(){
        console.log("LoggedIn = " +this.loggedIn);
    }
}