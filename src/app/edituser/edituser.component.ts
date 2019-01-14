import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../user.modal';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  id: number;
  user: User;
  editUser: User;
  response: string;
  success: boolean = false;
  error: boolean = false;

  constructor(private userService: UserserviceService, private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe((parameters) => {
      this.id = parameters["id"];
    });
    console.log(this.id);
  }

  ngOnInit() {
    console.log('init' + this.id);
    this.userService.getUser(this.id).subscribe((data: any) => {
      this.user = data;
    });
  }

  updateUser(form: any) {
    this.editUser = new User(form.userId, form.id, form.title, form.body);

    this.userService.editUser(this.editUser).subscribe((data: any) => {
      this.response = "User updated successfully";
      this.success = true;
      this.error = false;
    }, error => {
      this.response = "Error while updating the user";
      this.success = false;
      this.error = true;
    });
  }

}
