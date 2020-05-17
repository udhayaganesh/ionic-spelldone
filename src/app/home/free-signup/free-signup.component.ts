import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  templateUrl: './free-signup.component.html',
  styleUrls: ['./free-signup.component.scss']
})
export class FreeSignupComponent implements OnInit {
  inValidEmailId = false;
  email: string;
  auth2LoadInterval: any;
  signUpForm: any;
  screen = 'options';

  constructor(public dialogRef: MatDialogRef<FreeSignupComponent>,
    private authService: AuthService,
    private firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'),
        Validators.minLength(5),
        Validators.maxLength(50)
      ]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ])
      }, [CustomValidators.areEqual]),
    });
  }

  signUpUsingGoogle() {
    this.authService.signInWithGoogle().then((result) => {
      this.dialogRef.close(result);
    }).catch((error) => {
      console.log('Unable to sign in with Google.');
    });
  }

  signUpUsingFacebook() {
    this.authService.signInWithFacebook().then((result: any) => {
      this.dialogRef.close(result);
    }).catch((error) => {
      console.log('Unable to sign in with Facebook.');
    });
  }

  signUpWithEmail() {
    const customer = {
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.passwordGroup.password,
      isTrial: true
    };
    this.authService.signUp({ customer }).subscribe((result) => {
      this.authService.sendVerificationMail(customer.email, customer.password, true);
      this.dialogRef.close(result);
    }, error => {
      const errorMsg = error.json().error.message;
      alert('Unable to sign up with Email and Password. - ' + errorMsg);
    });
  }
  login()
  {
    
  }
}