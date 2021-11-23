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

  constructor(public dialog: MatDialog,public user:UserService) {
    
  }
  amount="200";
  total(){
    let x=0;
    console.log(this.amount);
    for(let data of this.transaction){
      x+= data.cost;
    }
    x.toString();
    this.amount =x+"";
  }
  paymentRequest:google.payments.api.PaymentDataRequest={
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[
      { 
        type:'CARD',
        parameters:{
          allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
          allowedCardNetworks:['AMEX','VISA','MASTERCARD']
        },
        tokenizationSpecification:{
          type:'PAYMENT_GATEWAY',
          parameters:{
            gateway:'example',
            gatewayMerchantId:'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo:{
      merchantId:'exampleGatewayMerchantId',
      merchantName:'exampleGatewayMerchantName'
    },
    transactionInfo:{
      totalPriceStatus:'FINAL',
      totalPriceLabel:'Total',
      totalPrice:this.amount,
      currencyCode:'USD'
    },
    callbackIntents:['PAYMENT_AUTHORIZATION']

  };
  onLoadPaymentData=(
    event:Event
  ):void=>{
    const eventDetail=event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data',eventDetail.detail);
  }

  onPaymentDataAuthorized :google.payments.api.PaymentAuthorizedHandler=(
    paymentData
  )=>{
    console.log('payment authorized',paymentData);
    return{
      transactionState:'SUCCESS'
    };
  }
  onError=(event:ErrorEvent):void=>{
    console.error('error',event.error);
  }

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
  

}
@Component({
  selector: 'app-dialogue',
  templateUrl: 'dialogue.component.html',
})
export class DialogueComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
