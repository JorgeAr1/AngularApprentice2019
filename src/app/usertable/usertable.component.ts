import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})


export class UsertableComponent implements OnInit {
usersCount = 5;
users: User[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUserApi();
  }

  getUserApi() {
    //this.users = User[this.usersCount];
    const ROOT_URL = 'https://randomuser.me/api/?results=' + this.usersCount + '&inc=name,location,email,picture';
    this.http.get(ROOT_URL).subscribe( (data) => {
      this.users = data.results;
      //this.order();
      }
    );
  }
/*
  order() {
    userInfo.
  }
*/
  setRangeVal() {
    const stringCount = ((document.getElementById('usersRange') as HTMLInputElement).value);
    this.usersCount = +stringCount;
    this.getUserApi();
    //https://mdbootstrap.com/docs/angular/forms/slider/
  }
}
