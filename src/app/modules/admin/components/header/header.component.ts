import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void { }

  constructor(private _auth: AuthService, private _route: Router) { }

  logout() {
    this._auth.logout();
  }
}
