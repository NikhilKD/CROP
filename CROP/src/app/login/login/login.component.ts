import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }


  
  ngOnInit(): void {
  }


  isActive:boolean=true;
  login(){
    this.isActive=false;
  }
  register(){
    this.isActive=true;
  }

}
