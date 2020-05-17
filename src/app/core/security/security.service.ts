import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';


@Injectable()
export class SecurityService {
  private bypassAuthentication: boolean = false;

  constructor(private _storageService: StorageService) { }

  isAuthenticated(): boolean {
    if (this.bypassAuthentication) {
      /* Bypass authentication */
      return true;
    } else {
      return this._storageService.checkToken();
    }
  }

  isTokenRequired(): boolean {
    if (this.bypassAuthentication) {
      /* Bypass authentication */
      return false;
    } else {
      return true;
    }
  }

  bypassAuth(bypass: boolean) {
    this.bypassAuthentication = bypass;
  }
}
