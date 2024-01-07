import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'src/app/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  totalUsers = 0;
  usersPerPage = 6;
  currentPage = 1;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers(this.currentPage, this.usersPerPage);
  }

  loadUsers(page: number, perPage: number) {
    this.userService.getUsers(page, perPage).subscribe(response => {
      this.users = response.data; // Assuming the API response has a 'data' field
      this.totalUsers = response.total; // Update totalUsers for the paginator
      // Handle other response fields as needed
    });
  }

  onPageChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.usersPerPage = pageData.pageSize;
    this.loadUsers(this.currentPage, this.usersPerPage);
  }
}
