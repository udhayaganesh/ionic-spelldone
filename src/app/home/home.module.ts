import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
 import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.page';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeService } from './home.service';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SignupStatusComponent } from './signup/signup-status/signup-status.component';
import {TermsAndConditionsComponent } from './signup/termsandconditions/termsandconditions.component';
import { PrivacyPolicyComponent } from './signup/privacypolicy/privacypolicy.component';
import { FreeSignupComponent } from './free-signup/free-signup.component';


@NgModule({
  imports: [
    CoreModule,
    SharedModule
  ],
  declarations: [
     HomeComponent, LoginComponent, SignupComponent, ForgotPasswordComponent, SignupStatusComponent,
     PrivacyPolicyComponent, TermsAndConditionsComponent,   FreeSignupComponent,
  ],
  entryComponents: [ForgotPasswordComponent, SignupStatusComponent, PrivacyPolicyComponent, TermsAndConditionsComponent,   FreeSignupComponent],
  providers: [HomeService]
})
export class HomeModule { }


