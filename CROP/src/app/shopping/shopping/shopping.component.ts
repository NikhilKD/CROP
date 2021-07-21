import { Component, Inject, OnInit } from '@angular/core';
import{UserService} from '../../user.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(private user:UserService,public dialog: MatDialog) { 
    this.user.getData().subscribe((data: any) =>
    {
      this.product=data,
      console.log(this.product),
      this.fetch=false;
    })
  }
  product:any=[];
  fetch=true;
  current:number=0;
  ngOnInit(): void {
    
  }
  openDialog(value:number) {
    this.dialog.open(DialogElementsExampleDialog);
    this.current=value;
    console.log(this.current);
    this.user.current=this.current;
  }
  list:any=[];
  add(value:number) {
    const item={
      item:this.product[value].title,
      cost:this.product[value].price
    }
    this.list.push(item);
    console.log(this.list);
    this.user.list = this.list;
  }
}

@Component({
  selector: 'dialog-box',
  templateUrl: 'dialog-box.html',
  styleUrls: ['./shopping.component.css']
})
export class DialogElementsExampleDialog implements OnInit {
  current:number=0;
  constructor(private user:UserService) {
    this.user.getData().subscribe((data: any) =>
    {this.product=data})
  }
  product:any=[];
  ngOnInit(): void {
    this.user.value.subscribe(list => {
      this.current=list
    });
    console.log();
  }

}