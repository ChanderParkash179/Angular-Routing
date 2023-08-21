import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  ngOnInit(): void { }

  constructor() { }

  faLock = faLock;

  enterEmail: string = 'Enter Email here';
}
