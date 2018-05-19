import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName = '';
  allowReset = true;

  constructor() { }

  ngOnInit() {
  }

  checkUsername() {
    if(this.userName){
      this.allowReset = false;
    }
  }

  resetUsername() {
    this.userName = '';
  }

}
