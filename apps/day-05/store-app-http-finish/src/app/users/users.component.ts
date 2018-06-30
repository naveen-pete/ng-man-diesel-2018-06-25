import { Component, OnInit } from '@angular/core';

import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      response => {
        this.users = response;
        console.log('get users response:', response);
      },
      error => {
        console.log('Error: Get users failed!', error);
      }
    );
  }
}
