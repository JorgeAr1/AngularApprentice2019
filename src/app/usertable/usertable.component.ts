import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { userInfo } from 'os';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})


export class UsertableComponent implements OnInit {
usersCount = 10;
/*prettyUsers: any;
users: User[] = [
  {
    id: 1,
    name : 'Jroge',
    email: 'x',
    address: 'y',
    image: 'z'
  }
];*/
users: User[];

  readonly ROOT_URL = 'https://randomuser.me/api/?results=' + this.usersCount + '&inc=name,location,email,picture';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.ROOT_URL).subscribe( (data) => {
        this.users = data.results;
        //this.order();
      }
    );
  }

  getUserApi(){
    this.http.get(this.ROOT_URL).subscribe( (data) =>
       console.log(data)
    )
    //this.order();
  }
/*
  order() {
    userInfo.
  }
*/

  setRangeVal(){
    //alert();
    //https://mdbootstrap.com/docs/angular/forms/slider/
  }
}
