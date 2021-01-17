import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Token} from "../models/token.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private  http: HttpClient) { }

  getToken(): Observable<Token> {
    return this.http
      .post<Token>('http://interview.agileengine.com/auth', { "apiKey": "23567b218376f79d9415" });
  }

  setToken (token: string): void {
    this.token = token;
  }

  getCurrentToken(): string {
    return this.token;
  }
}
