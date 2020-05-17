import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { StorageService } from 'src/app/shared/services/storage.service';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SecurityService } from '../security/security.service';

@Injectable()
export class SDInterceptor implements HttpInterceptor {

  constructor(private securityService: SecurityService,
    private _router: Router,
    private _storageService: StorageService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isAuthenticated()) {

      // add headers
      req = this.addHeaders(req);

      return next.handle(req).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            return event;
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              // delete the cookie if the call is unauthenticated
              this._storageService.logout();

              // navigate to login page
              this._router.navigate(['/login']);
            }

            return err;
          }
        }));
    } else {
      return new Subject<any>().asObservable();
    }
  }

  // Redirect to login if user is not authenticated
  isAuthenticated(): boolean {
    if (!this.securityService.isAuthenticated()) {
      this._router.navigate(['/login']);

      return false;
    } else {
      return true;
    }
  }

  // add headers
  addHeaders(request: HttpRequest<any>): any {

    let headers = new HttpHeaders();

    // append unique session identifier and content type in the header.
    // Note: HttpHeaders and HttpRequest are immutable
    headers = headers.append('Content-Type', 'application/json');

    // add auth token if authorization is required for the request
    if (this.isTokenRequired()) {
      headers = headers.append('Authorization', "JWT " + this._storageService.getToken());
    }

    return request.clone({ headers: headers });
  }

  isTokenRequired(): boolean {
    return this.securityService.isTokenRequired();
  }
}
