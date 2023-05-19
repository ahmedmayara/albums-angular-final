import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  error : number = 0;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {}

  onLoggedIn() {
      this.authService.signIn(this.user).subscribe({
        next: (response) => {
          let jwt = response.headers.get('Authorization')!;
          this.authService.saveToken(jwt);
          this.authService.isLoggedIn = true;
          this.router.navigate(['/albums']);
      },
      error: (err: any) => {
        this.error = 1;
        console.log(err);
      }
    });
  }
}
