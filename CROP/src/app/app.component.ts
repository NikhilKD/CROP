import { Component, HostListener, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'CROP';
  scroll=false;
  ngOnInit() {
  }
  number:any=0;
  @HostListener('window:scroll',['$event']) myscroll(){
    this.number=this.number+1;
    if(this.number>40){
      this.scroll=true;
    }
  }
 
}
