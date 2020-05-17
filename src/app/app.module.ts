import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';



import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
 import { SpinnerComponent } from './spinner/spinner.component';
 import { MatCardModule } from '@angular/material/card';
 import { MatMenuModule } from '@angular/material/menu';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatIconModule } from '@angular/material/icon';
  
 import {MatCheckboxModule, MatButtonModule, MatFormFieldModule,MatDialogModule,MatSelectModule, MatInputModule, MatRippleModule
  ,MatDividerModule } from '@angular/material';
 import { AngularFireAuth } from 'angularfire2/auth';
 import { SpinnerService } from './spinner/spinner.service';
import {HomeComponent} from './home/home.page' 
import { ToastrService } from 'ngx-toastr';
import {ToastrModule} from 'ngx-toastr';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import { StorageService } from './shared/services/storage.service';
import { SharedModule } from './shared/shared.module';

import { AuthService } from './shared/services/auth.service';
import {CoreModule} from './core/core.module';
import {HomeService} from './home/home.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { ForgotPasswordComponent } from './home/login/forgot-password/forgot-password.component';
@NgModule({
  declarations: [AppComponent,SpinnerComponent,ChangePasswordComponent,//,LoginComponent,HomeComponent,SignupComponent,
    ProfileComponent,SearchComponent],
  entryComponents: [], //
  
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule
    , ReactiveFormsModule ,FormsModule,MatFormFieldModule, MatButtonModule,MatDividerModule,
    MatMenuModule, MatDialogModule,MatSelectModule,MatCheckboxModule,MatInputModule,
    MatToolbarModule,DashboardModule,SharedModule,
    MatIconModule,HomeModule,
    MatCardModule,BrowserModule,CoreModule,
    HttpModule,//AngularFireModule,
    ToastrModule.forRoot(),
    IonicModule.forRoot()]
    ,
    
  providers: [
  AuthService,SpinnerService,ToastrService,HomeService,
  
  StorageService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: ToastrService, useClass: ToastrService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
