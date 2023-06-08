import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  name:string="";
  email:string="";
  password:string="";
  setName(name:string){
    this.name = name;
  }
  setEmail(email:string){
    this.email = email;
  }
  setPasswd(password:string){
    this.password = password;
  }
  getName(){
    return this.name;
  }
  getEmail(){
    return this.email;

  }
  getPasswd(){
    return this.password;
  }
  

}
