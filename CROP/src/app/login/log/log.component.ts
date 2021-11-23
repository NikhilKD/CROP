import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import UserService from 'src/app/user.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  isSignedIn: boolean=false;
  isRegistered: boolean=false;
  constructor(public UserService: UserService,private router: Router) { }
  ngOnInit(): void {
    if(localStorage.getItem('user') !== null){
    this.isSignedIn=true
    }
    else{
    this.isSignedIn=false
    this.isRegistered=false
    }
  }
  async onSignup(email: string, password: string){
    await this.UserService.signup(email, password)
    if(this.UserService.isLoggedIn)
    this.isSignedIn=true
    console.log(this.isSignedIn);
    this.isRegistered=true
  }
  async onSignin(email:string,password:string){
    await this.UserService.signin(email,password)
    if(this.UserService.isLoggedIn){
    this.isSignedIn = true,
    this.router.navigate(['/home']);
    }
    console.log(this.isSignedIn);
  }
  isActive:boolean=true;
  login(){
    this.isActive=false;
  }
  register(){
    this.isActive=true;
  }
  handleLogout(){
    this.isSignedIn = false

  }
}
