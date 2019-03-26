import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { userInfo } from 'os';


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})


export class UsertableComponent implements OnInit {
usersCount = 5;
users: Array<User>;
showLoading = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUserApi();
  }

  async finish(i) {
    if ( i == this.usersCount){
      this.showLoading = false;
    }
  }

  getOneUserApi(i) {
    const ROOT_URL = 'https://randomuser.me/api/?results=' + this.usersCount + '&inc=name,location,email,picture';
    this.http.get(ROOT_URL).subscribe( (data) => {
        this.users.push(data.results[i]);
        this.finish(i);
      }
    );
  }

  getUserApi() {
    this.users = new Array<User>();;
    for (let i = 0; i < this.usersCount; i++) {
      this.getOneUserApi(i);
    }
  }

  order() {
    this.users.forEach(elem => {
      console.log(elem);
      this.users.push(elem);
    });
  }

  setRangeVal() {
    const stringCount = ((document.getElementById('usersRange') as HTMLInputElement).value);
    this.usersCount = +stringCount;
    this.getUserApi();
  }
}
