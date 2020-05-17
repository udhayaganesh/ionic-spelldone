import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { take } from 'rxjs/operators';
import { AngularFireAuth } from "@angular/fire/auth";
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { SpinnerService } from 'src/app/spinner/spinner.service';

@Injectable()
export class AuthGuard implements CanActivate {
  members: any;
  constructor(private storageService: StorageService,
    private router: Router,
    private authService: AuthService,
    private spinnerService: SpinnerService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let self = this;
    return new Observable<boolean>(observer => {

      if (this.storageService.checkToken()) {

        if (!this.storageService.getUser()) {
          const token = this.storageService.getToken();
          this.spinnerService.show();

          // get user data from DB.
          this.authService.signIn({ token }).subscribe((response: any) => {
            let data = response.json();
            data.userData.userLastState = data.userLastState;
            this.storageService.setUser(data.userData);
            this.storageService.setSubscription(data.subscription);
            this.spinnerService.hide();
            if (data.userData.isActive) {
              observer.next(true);
            } else {
              this.router.navigate(['/profile']);
            }
          }, error => {
            observer.next(false);
            this.storageService.logout();
            self.router.navigate(['login']);
            this.spinnerService.hide();
          });

        } else {
          observer.next(true);
        }
        // return Observable.of(true);
      } else if (this.storageService.isGuestUser()) {
        observer.next(true);
      } else {
        self.router.navigate(['login']);
        observer.next(false);
      }

    });
  }

}