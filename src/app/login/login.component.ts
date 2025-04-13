import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']    
})
export class LoginComponent {
    isLoginFormVisible: boolean = true;
    password: string = '';
    userName: string = '';
    areCredentialsValid: boolean = true;
    passwordErrors: {
        length: boolean,
        lowercase: boolean,
        uppercase: boolean,
        number: boolean,
        special: boolean,
        shouldContainName: boolean
    } = {
      length: true,
      lowercase: true,
      uppercase: true,
      number: true,
      special: true,
      shouldContainName: false
    };

    constructor(private router:Router) {

    }

    validatePassword(): void {
      // Length check (8-64 characters)
      this.passwordErrors.length = !(this.password.length >= 8 && this.password.length <= 64);
      
      // Lowercase character check
      this.passwordErrors.lowercase = !/[a-z]/.test(this.password);
      
      // Uppercase character check
      this.passwordErrors.uppercase = !/[A-Z]/.test(this.password);
      
      // Number check
      this.passwordErrors.number = !/[0-9]/.test(this.password);
      
      // Special character check
      this.passwordErrors.special = !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.password);
    }
    
    isPasswordValid(): boolean {
      return !Object.values(this.passwordErrors).some(error => error === true);
    }

    toggleForm(){
 
            this.isLoginFormVisible = !this.isLoginFormVisible

    }

     loginHandler() {

        let containsName = this.password.toLowerCase().includes(this.userName.toLowerCase())

        this.passwordErrors.shouldContainName = containsName
        if(!this.passwordErrors.shouldContainName){
            this.router.navigateByUrl('/body/landingPage')
        }

    }
}