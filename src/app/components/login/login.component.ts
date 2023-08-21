import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  ngOnInit(): void { }

  constructor() { }

  faLock = faLock;
  emailPattern: any = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';

  enterEmail: string = 'Enter Email here';
  enterPassword: string = 'Enter Password here';

  loginForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl(''),
  });

  onLogin() {

  }

}
