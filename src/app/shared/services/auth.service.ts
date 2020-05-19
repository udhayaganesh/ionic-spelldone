import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import {
  Router
} from '@angular/router';
import { StorageService } from './storage.service';
import { Http } from '@angular/http';
import { sdconfig } from 'src/app/core/sdconfig';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material';
import { MessageDialogComponent } from '../dialogs/message-dialog/message-dialog.component';
import * as firebase from 'firebase';
import { OauthProvider } from 'src/app/core/enum/enum';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  authState: any;
  constructor(private http: Http,
    private router: Router,
    private _storageService: StorageService,
    private firebaseAuth: AngularFireAuth,
    private ngZone: NgZone,
    private dialog: MatDialog,private googlePlus: GooglePlus) {

  }

  signUp(data: any) {
    return this.http.post(sdconfig.backendHost + "/user/signup", data);
  }

  signIn(data: any) {
    return this.http.get(sdconfig.backendHost + "/user/signin", { params: data });
  }

  createUser(data: any) {
    return this.http.post(sdconfig.backendHost + "/user/create", data);
  }

  signInWithGoogleMobile()
  {
    return new Promise((resolve, reject) => {
    this.googlePlus.login({})
    .then((result: any) => {
      this.ngZone.run(() => {
             firebase.auth().currentUser.getIdToken().then(idToken => {
           if (result.additionalUserInfo.isNewUser) {
             this.createUserRecord(result, idToken, OauthProvider.GOOGLE, result.additionalUserInfo.isNewUser, resolve);
           } else {
             resolve({
               isNewUser: result.additionalUserInfo.isNewUser,
               uid: result.user.uid,
               token: idToken,
               emailVerified: result.user.emailVerified,
             });
           }
         }).catch((error) => {
           console.log(error);
         });
       });
     })
    //.then((data) => { this.freeSignUpSuccess(data);})
    //.then(res => console.log(res))
    .catch(err => console.error(err))
  });
  }
  /* Sign in with Google */
  signInWithGoogle() {
    return new Promise((resolve, reject) => {//
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      firebase.auth().signInWithPopup(provider)
      .then((result: any) => {
       this.ngZone.run(() => {
              firebase.auth().currentUser.getIdToken().then(idToken => {
            if (result.additionalUserInfo.isNewUser) {
              this.createUserRecord(result, idToken, OauthProvider.GOOGLE, result.additionalUserInfo.isNewUser, resolve);
            } else {
              resolve({
                isNewUser: result.additionalUserInfo.isNewUser,
                uid: result.user.uid,
                token: idToken,
                emailVerified: result.user.emailVerified,
              });
            }
          }).catch((error) => {
            // Handle error
            console.log(error);
          });

        });
      }).catch((error) => {
        // Handle Errors here.
        reject(error);
      });

    });

  }

  /* Sign in with Facebook */
  signInWithFacebook() {
    return new Promise((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      provider.setCustomParameters({
        'display': 'popup',
        'auth_type': 'reauthenticate'
      });
      provider.addScope('email');
      firebase.auth().signInWithPopup(provider).then((result: any) => {
        this.ngZone.run(() => {

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          // let token = result.credential.accessToken;
          // The signed-in user info.
          // let user = result.user;
          firebase.auth().currentUser.getIdToken().then(idToken => {

            if (result.additionalUserInfo.isNewUser) {
              if (result.user.emailVerified) {
                this.createUserRecord(result, idToken, OauthProvider.FACEBOOK, result.additionalUserInfo.isNewUser, resolve);
              } else if (result.user.email) {
                this.sendEmailVerification(result.user.email, true, resolve);
                /* setTimeout(() => {
                  resolve({});
                }, 1000); */
              } else {
                this.dialog.open(MessageDialogComponent, {
                  width: '500px',
                  data: {
                    message: 'We require your Email ID to continue.',
                    description: 'Make sure you have attached an Email ID to your Facebook account.'
                  }
                });
                setTimeout(() => {
                  resolve({});
                });
              }
            } else {
              if (result.user.emailVerified) {
                this.signIn({ token: idToken }).subscribe((response: any) => {

                  let data = response.json();
                  if (data.userData) {
                    resolve({
                      isNewUser: result.additionalUserInfo.isNewUser,
                      uid: result.user.uid,
                      token: idToken,
                      emailVerified: result.user.emailVerified,
                    });
                  } else {
                    this.createUserRecord(result, idToken, OauthProvider.FACEBOOK, result.additionalUserInfo.isNewUser, resolve);
                  }
                }, error => {
                  console.log(error);
                  reject(error);
                });
              } else if (result.user.email) {
                this.emailIdNotVerified(result.user.email, resolve);
              } else {
                this.dialog.open(MessageDialogComponent, {
                  width: '500px',
                  data: {
                    message: 'We require your Email ID to continue.',
                    description: 'Make sure you have attached an Email ID to your Facebook account.'
                  }
                });
                setTimeout(() => {
                  resolve({});
                });
              }
            }
          }).catch((error) => {
            // Handle error
            console.log(error);
          });

        });
      }).catch(function (error) {
        // Handle Errors here.
        reject(error);
      });
    });

  }

  createUserRecord(result: any, idToken: string, provider: string, isNewUser: boolean, resolve: any) {
    this.createUser({
      customer: { isTrial: true },
      idToken,
      uid: result.user.uid,
      provider
    }).subscribe(response => {
      console.log(response);
      resolve({
        isNewUser,
        uid: result.user.uid,
        token: idToken,
        emailVerified: result.user.emailVerified
      });
    }, error => {
      console.log(error);
    });
  }
  resetPassword(email: any) {
    return this.firebaseAuth.auth.sendPasswordResetEmail(email);
  }

  sendVerificationMail(email: string, password: string, showSuccessMsg?: boolean) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(user => {
      this.sendEmailVerification(email, showSuccessMsg);
    }).catch(error => {
      console.log('User is not logged in: ' + error.message);
    });
  }

  emailIdNotVerified(email: string, resolve?: any) {
    this.ngZone.run(() => {

      this.dialog.open(MessageDialogComponent, {
        width: '500px',
        data: {
          message: "Email Verification",
          description: "Your Email ID has not been verified. Please click 'Send Verification' button to resend",
          primaryBtn: 'Send Verification',
          secondaryBtn: 'Close',
          verifyEmail: true
        }
      }).afterClosed().subscribe(response => {
        if (response === 'SUCCESS') {
          this.sendEmailVerification(email, true, resolve);
        } else {
          if (resolve) {
            resolve({});
          }
        }
      });
    });
  }

  sendEmailVerification(email: string, showSuccessMsg?: boolean, resolve?: any) {
    this.firebaseAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.ngZone.run(() => {
          if (showSuccessMsg) {
            this.dialog.open(MessageDialogComponent, {
              width: '500px',
              data: {
                description: 'Verification Email has been sent to ' + email + '. Please verify your Email ID to continue using the application.',
                message: 'Email Verification',
                primaryBtn: 'Close'
              }
            }).afterClosed().subscribe(res => {
              if (resolve) {
                resolve({});
              }
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  logout() {
  }
}