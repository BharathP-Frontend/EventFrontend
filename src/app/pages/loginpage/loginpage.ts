import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthResponseModel } from '../../models/model';
import { Users } from '../../services/users/users';

@Component({
  selector: 'app-loginpage',
  imports: [ReactiveFormsModule, RouterLink, RouterModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.scss',
})
export class Loginpage implements OnInit {
  loginGroup!: FormGroup;
  userDetails!: AuthResponseModel;
  constructor(private fb: FormBuilder, private usersService: Users, private router: Router) {}

  ngOnInit(): void {
    this.loginGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginGroup.valid) {
      console.log('Login Values: ', this.loginGroup.value);
      this.usersService.postLoginData(this.loginGroup.value).subscribe({
        next: (data) => {
          // debugger;
          this.userDetails = data;
          localStorage.setItem(
            'userDetails',
            JSON.stringify({
              Name: this.userDetails.user.name,
              Email: this.userDetails.user.email,
              Token: this.userDetails.token,
            })
          );
          localStorage.setItem('token', this.userDetails.token);
        },
        error: (err) => console.log(err),
      });
      this.router.navigate(['/']);
    } else {
      console.log('Form error');
    }
  }
}
