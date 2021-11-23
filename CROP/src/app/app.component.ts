import { Component, HostListener, Output, EventEmitter, OnInit} from '@angular/core';
import UserService from 'src/app/user.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'CROP';
  scroll=false;
  @Output() isLogout = new EventEmitter<void>()
  constructor(public UserService: UserService) { }

  ngOnInit() {
  }
  number:any=0;
  @HostListener('window:scroll',['$event']) myscroll(){
    this.number=this.number+1;
    if(this.number>40){
      this.scroll=true;
    }
  }
  logout(){
    this.UserService.logout()
    this.isLogout.emit()
  }
}
