import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { sdconfig } from '../core/sdconfig';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class ProfileService {
  constructor(private http: Http,
    public firebaseAuth: AngularFireAuth) {
  }

  updateBilling(params: any) {
    return this.http.post(sdconfig.backendHost + "/subscription/updatebilling", params);
  }

  changeCard(params: any) {
    return this.http.post(sdconfig.backendHost + "/subscription/changecard", params);
  }

  getPaymentDetails(uid: any) {
    return this.http.get(sdconfig.backendHost + "/subscription/payment-detail", { params: { uid } });
  }

  resetPassword(email: any) {
    return this.firebaseAuth.auth.sendPasswordResetEmail(email);
  }
}
