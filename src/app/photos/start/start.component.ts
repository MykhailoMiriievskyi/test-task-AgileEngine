import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Token} from "../../shared/models/token.model";
import {AuthService} from "../../shared/services/auth.service";


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  isAuthButton: boolean;
  isAuthError: boolean;

  constructor(private authService: AuthService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  public getAutorization(): void {
    this.isAuthButton = true;
    this.isAuthError = false;
    this.authService.getToken().subscribe((res: Token) => {
        if (res) {
          this.authService.setToken(res.token);
          this.router.navigate(['/photos']);
          this.isAuthButton = false;
        }
      },
      error => {
        this.isAuthButton = false;
        this.isAuthError = true;
      }
    );
  }
}
