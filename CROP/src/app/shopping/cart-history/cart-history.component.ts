import { Component, Injectable,Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import UserService from '../../user.service';

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
  selector: 'app-cart-history',
  templateUrl: './cart-history.component.html',
  styleUrls: ['./cart-history.component.css']
})
export class CartHistoryComponent implements OnInit {

  constructor(public dialog: MatDialog,public user:UserService) {}

  ngOnInit(): void {
    this.user.list$.subscribe(list => {
      this.transaction=list;
    }
      );
    
  }

  openDialog() {
    this.dialog.open(DialogueComponent, {
    });
  }


  displayedColumns = ['item', 'cost','remove'];
  transaction = [
  {
    item:"",
    cost:30
  }

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
  templateUrl: 'dialogue.component.html',
})
export class DialogueComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
