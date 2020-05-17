import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { SecurityService } from './security/security.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SDInterceptor } from './interceptors/sd-interceptor';

@NgModule({
  imports: [BrowserAnimationsModule, CommonModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule, AngularFirestoreModule],
  declarations: [],
  providers: [SecurityService, {
    provide: HTTP_INTERCEPTORS, useClass: SDInterceptor, multi: true
  }],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule, AngularFireAuthModule, AngularFireModule
  ]
})
export class CoreModule { }