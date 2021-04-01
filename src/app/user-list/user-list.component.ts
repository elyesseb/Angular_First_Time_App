import { Component, OnInit } from '@angular/core';
import {users} from '../../assets/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})

export class UserListComponent implements OnInit {
  users = users;
  
  constructor() {
    
  }
  
  ngOnInit() {
    console.log(this.users);
  }
}
