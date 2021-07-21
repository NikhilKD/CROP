import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from  "@angular/router";
// import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
// import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // user: User;

  constructor(private http: HttpClient) {}
    

    
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
