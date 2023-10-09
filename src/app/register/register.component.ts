import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UsersService) {}

  user = new User();

  ngOnInit(): void {}

  register() {
    this.userService.registerUser(this.user).subscribe((data) => {
      console.log('User registered');
      alert('User registered');
    });
  }
}
