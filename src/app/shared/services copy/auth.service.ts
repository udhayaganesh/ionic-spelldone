import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Router
} from '@angular/router';
import { StorageService } from './storage.service';
import { Http } from '@angular/http';
import { sdconfig } from 'src/app/core/sdconfig';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  authState: any;
  constructor(private http: Http,
    private router: Router,
    private _storageService: StorageService,
    private firebaseAuth: AngularFireAuth) {

  }

  signUp(data: any) {
    return this.http.post(sdconfig.backendHost + "/user/signup", data);
  }

  signIn(data: any) {
    return this.http.get(sdconfig.backendHost + "/user/signin", { params: data });
  }

  resetPassword(email: any) {
    return this.firebaseAuth.auth.sendPasswordResetEmail(email);
  }

  logout() {

  }
}