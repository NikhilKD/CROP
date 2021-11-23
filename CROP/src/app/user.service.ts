import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from  "@angular/router";
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export default class UserService {
  // user: User;
  isLoggedIn: boolean = false
  constructor(private http: HttpClient,public firebaseAuth: AngularFireAuth) {
  }
  async signin(email: string,password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  async signup(email: string,password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
  
  
  url='https://crop-593a3-default-rtdb.firebaseio.com/products.json';
  private headers=new HttpHeaders({'Content-Type':'application/json'});

    saveProducts(products:any[]){
      return this.http.put(this.url,products,{headers:this.headers});
    }
    fetchProducts(){
      return this.http.get(this.url);
    }
    getData():any {
      let url="https://fakestoreapi.com/products";
      console.log(url);
      return this.http.get(url);
    }
    private listsource= new BehaviorSubject(1);
    value=this.listsource.asObservable();

    set current(v: number){
      this.listsource.next(v);
    }

    private listItem = new BehaviorSubject<any>(null);
    public list$ = this.listItem.asObservable();

    set list(v:any){ 
      this.listItem.next(v);
    }
    
}
