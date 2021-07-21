import { Component, OnInit ,NgZone} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  Form:FormGroup | undefined;
  constructor(private fb:FormBuilder,public auth:AngularFireAuth,public router: Router,public ngZone:NgZone) { }

  ngOnInit(): void {
    this.Form=this.fb.group({
      
    })
    
  }
  isActive:boolean=true;
  login(){
    this.isActive=false;
  }
  register(){
    this.isActive=true;
  }
  logIn(email:any,password:any){
    this.email=email.value;
    this.password=password.value;
    email.value="";
    password.value="";
    console.log(email);
    console.log(password);
    this.auth.signInWithEmailAndPassword(this.email,this.password).catch(err =>
      { 
        console.log(err);
        console.log("Password incorrect")
    }).then(res => 
      {
        console.log(res);
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
    });

  }

  signIn(semail:any,spassword:any){
  }

  email=" ";
  password=" ";

}
