import { Component, Injectable,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface transaction {
  item: string;
  cost: number;
}
export interface DialogData {

}
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogueComponent, {
    });
  }

  onClick(name:any,amount:any){
    var numberValue = Number(amount.value);
    const value={
      item:name.value,
      cost:numberValue
    }
    this.transaction.push(value)
    name.value='';
    amount.value='';
  }

  displayedColumns = ['item', 'cost','remove'];
  transaction = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];
  delete(value:any){
    this.transaction.splice(value,1);
  }
  amount = 0;
  total(){
    for(let data of this.transaction){
      this.amount += data.cost;
    }
    console.log(this.amount);
  }

}
@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
})
export class DialogueComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
