import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from 'src/app/shared/services/storage.service';
import { SpinnerService } from 'src/app/spinner/spinner.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageDialogComponent } from 'src/app/shared/dialogs/message-dialog/message-dialog.component';
import { FreeSignupComponent } from '../free-signup/free-signup.component';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  loginForm: any;
  isMobileLandscape: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private firebaseAuth: AngularFireAuth,
    private storageService: StorageService,
    private spinnerService: SpinnerService,
    private dialog: MatDialog,
    private toastService: ToastrService,private googlePlus: GooglePlus) { }
    

  ngOnInit() {
    if (window.screen.height <= 411) {
      this.isMobileLandscape = true;
    }

    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"),
        Validators.minLength(5),
        Validators.maxLength(50)
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  login() {
    this.spinnerService.show();
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(this.username, this.password).then(response => {
        console.log(response);
        if (response.user.emailVerified) {
          response.user.getIdToken().then(token => {
            this.setUserDataAndNavigate(token);
          }).catch(error => {
            console.log(error);
            this.spinnerService.hide();
          });

        } else {
          this.spinnerService.hide();
          this.emailIdNotVerified(response.user.email);
        }
      }).catch(err => {
        console.log(err);
        this.toastService.error('Invalid email or password.');
        this.spinnerService.hide();
      });


    /* this.homeService.signIn({ username: this.username, password: this.password }).subscribe(response => {
      console.log(response);
      alert('Account created successfully.');
    }, error => {
      console.log(error);
    }); */

  }

  setUserDataAndNavigate(token: string) {
    console.log(token);
    this.authService.signIn({ token }).subscribe((response: any) => {

      let data = response.json();
      this.storageService.setUserToken(token);
      data.userData.userLastState = data.userLastState;
      this.storageService.setUser(data.userData);
      this.storageService.setSubscription(data.subscription);
      this.spinnerService.hide();
      if (data.userData.isActive) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/profile']);
      }

    }, error => {
      console.log(error);
      this.spinnerService.hide();
    });

  }

  emailIdNotVerified(email: string) {
    this.dialog.open(MessageDialogComponent, {
      width: '500px',
      data: {
        message: 'Emal Verification',
        description: "Your Email ID has not been verified. Please click 'Send Verification' button to resend",
        primaryBtn: 'Send Verification',
        secondaryBtn: 'Close'
      }
    }).afterClosed().subscribe(response => {
      if (response === 'SUCCESS') {
        this.authService.sendEmailVerification(email, true);
      } else {

      }
    });
  }

  register() {
    this.router.navigate(['signup']);
  }

  // sign in with google. this method creates an account if user email doesn't exists in Firebase.
  signInWithGoogle() {
    this.authService.signInWithGoogleMobile().then((data) => {
      this.freeSignUpSuccess(data);
    }).catch((error) => {
      console.log('Unable to sign in with Google.');
    });

/*
    this.googlePlus.login({})
    .then((data) => {
      this.freeSignUpSuccess(data);})
    //.then(res => console.log(res))
    .catch(err => console.error(err))

   this.authService.signInWithGoogle().then((data) => {
      this.freeSignUpSuccess(data);
    }).catch((error) => {
      console.log('Unable to sign in with Google.');
    });
    */
  }

  // sign in with google. this method creates an account if user email doesn't exists in Firebase.
  signInWithFacebook() {
    this.authService.signInWithFacebookMobile().then((data) => {
      this.freeSignUpSuccess(data);
    }).catch((error) => {
      console.log('Unable to sign in with Facebook.');
    });
    /*this.authService.signInWithFacebook().then((data) => {
      this.freeSignUpSuccess(data);
    }).catch((error) => {
      console.log('Unable to sign in with Facebook.');
    });*/
  }

  signUpForTrail() {
    const dialogRef = this.dialog.open(FreeSignupComponent, {
      width: '500px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(data => {
      this.freeSignUpSuccess(data);
    });
  }

  freeSignUpSuccess(data: any) {
    if (data && data.uid && data.emailVerified) {
      // new user signed up using Google.
      // if (data.isNewUser) {
      // set user data and navigate to dashboard. 
      this.setUserDataAndNavigate(data.token);
      // } else {
      // get user data and navigate to dashboard if account is active.
      /* this.dynamicDataService.getUser(data.uid).subscribe(userData => {
        this.validateUserAccount({ status: true, user: userData, guid: data.uid })
      }, error => {
        // TODO: if no user data then create user record. (when signed in with facebook)
  
        alert("User profile does not exist. Please contact admin!");
      }); */

      // }
    }
  }

  forgotPassword() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(response => {
      this.authService.resetPassword(response).then(() => {
        this.toastService.success('Password reset link sent successfully.');
      }).catch((error) => {
        this.toastService.error('Could not send password reset link. Try later.');
      });
    });
  }

  continueAsGuest() {
    this.storageService.startGuestUserSession();
    this.router.navigate(['dashboard']);
  }

}