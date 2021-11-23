import { Component, Inject, OnInit } from '@angular/core';
import UserService from 'src/app/user.service';
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
      this.fetch=false;
      console.log(this.product);
    })
  }

  product:any=[];
  fetch=true;
  current:number=0;
  ngOnInit(): void {

    console.log(this.seller);
    this.user.fetchProducts().subscribe(
      (response:any) => {
        console.log(response);
        this.seller=response;
      },
      (err:any)=> console.log(err)
      );
    
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
  seller:any=[
    { 
      item:"Shirt",
      description:"need A+ blood",
      image:"https://images.pexels.com/photos/1884971/pexels-photo-1884971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      cost:300
    }
  ];
  
  addProduct(w:any,x:any,y:any,z:any){
    console.log(this.seller);
    this.seller.push({
      item:x.value,
      description:y.value,
      image:w.value,
      cost:z.value
    });

    this.user.saveProducts(this.seller).subscribe(
      (response:any) => console.log(response),
      (err:any)=> console.log(err));
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