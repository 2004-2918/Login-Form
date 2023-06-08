import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name:string = "";
  email:string = "";
  password:string = "";
  constructor(private serve:Service1Service){

  }
  setDetails(){
    this.serve.setName(this.name);
    this.serve.setEmail(this.email);
    this.serve.setPasswd(this.password);
    alert(this.name);
    // alert("hii")
  }
 }
