import { Component, OnInit } from '@angular/core';
import { User } from '../user.modal';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userlist: User[];
  response: string;
  success: boolean = false;
  error: boolean = false;

  constructor(private userService: UserserviceService, private router: Router) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUserList().subscribe((data: any) => {
      this.userlist = data;
    });
  }

  editUser(userId: number) {
    this.router.navigate(['edituser/' + userId]);
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe((data: any) => {
      this.response = "User deleted successfully";
      this.success = true;
      this.error = false;
    }, error => {
      this.response = "Error while deleting the user";
      this.success = false;
      this.error = true;
    });
  }

}
