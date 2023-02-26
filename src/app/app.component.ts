import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
 signInUsers:any[]=[];

 signUpObj:any=  {
  email:'',
  password:''
 }; 
 
 loginObj:any=  {
  email:'',
  password:''
 }; 
  passwordForm: any;


 constructor(private fb: FormBuilder) {
  this.passwordForm = fb.group({
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:\'"\\|,.<>\\/?]).*$')
    ]]
  });
}



	ngOnInit(): void {
      
  }


  onlogin(){
 
    this.loginObj = [];

    this.loginObj.push(this.loginObj);
    localStorage.setItem('signInUsers',JSON.stringify(this.signInUsers));

    this.loginObj=  {
      email:'',
      password:''
     }; 

     window.location.href = "https://github.com/srjeve007";
  }
  
 

	}
		




