import { Component, OnInit } from '@angular/core';
import { User } from '../user.modal';
import { UserserviceService } from '../userservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user: User;
  response: string;
  success: boolean = false;
  error: boolean = false;

  constructor(private userService: UserserviceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  addUser(form: any) {
    this.user = new User(form.userId, form.id, form.title, form.body);

    this.userService.getUser(this.user.id).subscribe((data: any) => {
      this.response = "User already exist. Try with a different Id";
      this.success = false;
      this.error = true;
    }, error => {
      this.userService.addUser(this.user).subscribe((data: any) => {
        this.response = "User added successfully";
        this.success = true;
        this.error = false;
      }, error => {
        this.response = "Error occured while adding a user";
        this.success = false;
        this.error = true;
      });
    })
  }
}
