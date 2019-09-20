import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken() {
    return localStorage.getItem('token');
  }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  // Remove token from localstorage.
  logout() {
    localStorage.clear();
  }
}
