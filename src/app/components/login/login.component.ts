import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this._auth.isLoggedIn() === true ? this._route.navigate(['admin']) : this._route.navigate(['/login']);
  }

  constructor(private _auth: AuthService, private _route: Router) { }

  faLock = faLock;
  emailPattern: any = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';

  enterEmail: string = 'Enter Email here';
  enterPassword: string = 'Enter Password here';

  loginForm: any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onLogin() {
    if (this.loginForm.valid) {
      this._auth.login(this.loginForm.value).subscribe((res) => {
        this._route.navigate(['admin']);
      },
        (error: Error) => {
          alert(error.message);
        });
    }
  }

}
