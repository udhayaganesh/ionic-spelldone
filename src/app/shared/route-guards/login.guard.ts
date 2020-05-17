import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { StorageService } from '../services/storage.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private storageService: StorageService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (this.storageService.checkToken()) {
            this.router.navigate(['dashboard']);
            return of(false);
        } else {
            return of(true);
        }

    }
}