import { Component, OnInit } from '@angular/core';
import jsonData from '../file2.json';
import { Object } from 'core-js';
import { Service1Service } from '../service1.service';
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit{
  json: any = jsonData;
  x:string="";
  a=1;
  users2: { passwd : string}[];
  users1: { email: string; }[];
  users: { firstName: string}[];
  constructor(private serve: Service1Service){
    
    this.users = [];
    this.users1=[];
    this.users2=[];
   
  }
  ngOnInit(): void {


    this.json.forEach((userObj: any) => {
      const firstName = userObj[Object.keys(userObj)[0]][0].Login[0].name.FirstName;
      this.users.push({ firstName: firstName });
    });

    this.json.forEach((userObj: any) => {
      const email = userObj[Object.keys(userObj)[0]][0].Login[1].Email_id;
      this.users1.push({ email: email });
    });

    this.json.forEach((userObj: any) => {
      const passwd = userObj[Object.keys(userObj)[0]][0].Login[2].Password;
      this.users2.push({ passwd: passwd });
    });
    this.x = this.serve.getName();

    for(let i=0; i<this.users.length;i++){
        if(this.users[i].firstName===this.serve.getName()){
            if(this.users1[i].email===this.serve.getEmail() && this.users2[i].passwd===this.serve.getPasswd())
            {
              this.a=0
              alert("Login Successfull");
              break;
            }
        }}
      if(this.a!=0)
      {
        alert("Incorrect Credentials");
      }
  }

}
