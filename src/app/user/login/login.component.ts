import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  response: string;
  private url = 'http://localhost/EmployeeRegistration/public/user/v1/users/login';
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private ts: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  loginUser() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.userService.loginUser(this.loginForm.value, this.url).subscribe(
      response => {
        if (response.error === 'Invalid email or password') {
          this.ts.error(response.error);
          return;
        } else if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        } else {
          this.ts.error('error');
        }

      },
      error => {
        console.log(error);
      }
    );

  }
  get f() { return this.loginForm.controls; }
}
