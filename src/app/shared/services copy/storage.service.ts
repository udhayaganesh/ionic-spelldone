import { Injectable } from "@angular/core";
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class StorageService {

  private user: any;
  private token: any;
  private currentState = {};
  subscription: any;

  constructor() {
  }

  setUser(data: any) {
    this.user = data;
  }

  getUser() {
    return this.user;
  }

  setUserToken(token: any) {
    this.token = token;
    //1 day expiry
    Cookie.set(this.encode("token"), this.encode(token), 1, "/");
  }

  getToken() {
    return this.decode(Cookie.get(this.encode("token")));
  }

  checkToken() {
    if (Cookie.get(this.encode("token"))) {
      return true;
    }
    return false;
  }

  setSubscription(data: any) {
    this.subscription = data;
  }

  getSubscription() {
    return this.subscription;
  }

  public encode(token: any) {
    return btoa(token);
  }
  public decode(token: any) {
    return atob(token);
  }

  setCurrentState(currentState) {
    this.currentState = currentState;
  }

  getCurrentState() {
    return this.currentState;
  }

  updateCurrentState(property: string, value: any) {
    this.currentState[property] = value;
  }


  startGuestUserSession() {
    Cookie.set(this.encode("guest"), this.encode(true), 1, "/");
  }

  isGuestUser() {
    if (Cookie.get(this.encode("guest"))) {
      return true;
    }
    return false;
  }

  endGuestSession() {
    Cookie.delete(this.encode('guest'), "/");
  }

  logout() {
    this.user = null;
    this.token = null;
    Cookie.delete(this.encode('token'), "/");
  }
}