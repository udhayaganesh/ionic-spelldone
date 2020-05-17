import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { sdconfig } from '../core/sdconfig';

@Injectable()
export class HomeService {
  constructor(private http: Http) {
  }

  getCountries() {
    return this.http.get(sdconfig.baseResourceUrl + "countries.json");
  }

  getPlans() {
    return this.http.get(sdconfig.backendHost + "/subscription/plans", {});
  }
}
