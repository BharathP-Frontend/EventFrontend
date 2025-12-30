import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from '../../services/users/users';
import { SignupModel } from '../../models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  imports: [ReactiveFormsModule],
  templateUrl: './registerpage.html',
  styleUrl: './registerpage.scss',
})
export class Registerpage {
  SignupGroup!: FormGroup;

  constructor(private fb: FormBuilder, private usersService: Users, private router: Router) {}

  ngOnInit(): void {
    this.SignupGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.SignupGroup.valid) {
      console.log('Login Values: ', this.SignupGroup.value);
      this.usersService.postSignupData(this.SignupGroup.value).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/login']);
        },
        error: (err) => console.log(err),
      });
    } else {
      console.log('Form error');
    }
  }
}
