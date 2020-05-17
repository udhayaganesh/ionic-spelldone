import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';
import { environment } from 'src/environments/environment';
import { HomeService } from '../home/home.service';
import { PlanType } from '../core/enum/enum';
import { ProfileService } from './profile.service';
import { sdconfig } from '../core/sdconfig';
import { MessageDialogComponent } from '../shared/dialogs/message-dialog/message-dialog.component';
import { MatDialog } from '@angular/material';
import { ChangePasswordComponent } from './change-password/change-password.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  userData: any;
  subscriptionData: any;
  plans: any;
  planType = PlanType;
  selectedPlanType = PlanType.REGIONAL;
  cardDetails: any;

  constructor(private storageService: StorageService,
    private homeService: HomeService,
    private profileService: ProfileService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.userData = this.storageService.getUser();
    this.subscriptionData = this.storageService.getSubscription();
    if (this.subscriptionData) {
      this.selectedPlanType = this.subscriptionData.plan || this.selectedPlanType;
      this.getSubscriptionData();
    }
    if (!this.userData.isActive) {
      this.homeService.getPlans().subscribe(response => {
        this.plans = response.json();
        console.log(this.plans);
      }, error => {
        console.log(error);
      });
    }
  }

  //stripe checkout window in profile
  openCheckout(isActive: boolean) {
    let selectedPlanDetails;
    for (let plan of this.plans.data) {
      if (plan.nickname.toLowerCase().indexOf(this.selectedPlanType.toLowerCase()) !== -1) {
        selectedPlanDetails = {
          type: this.selectedPlanType,
          amount: plan.amount,
          interval: plan.interval
        };
        break;
      }
    }
    var handler = window['StripeCheckout'].configure({
      key: environment.stripe_public_key,
      // image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      image: 'assets/images/Logo-Full-Black.png',
      locale: 'auto',
      billingAddress: true,
      token: (token) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        let customer = {
          email: this.userData.email,
          uid: this.userData.uid
        };
        let subscription = {
          planType: this.selectedPlanType,
          planDuration: 'yearly'
        };
        let source = token.id;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.profileService.updateBilling({ customer, source, subscription }).subscribe(data => {
          this.userData.isActive = true;

          this.dialog.open(MessageDialogComponent, {
            width: '500px',
            data: {
              message: 'Billing information updated successfully. You have subscribed to ' + this.selectedPlanType + ' - yearly plan.',
              description: '',
              primaryBtn: 'Close'
            }
          });


        }, error => {
          alert("Payment Transaction Failed.");
          // this.router.navigate(['']);
        });
      }
    });

    let checkoutConfig = {
      name: 'Spelldone',
      description: selectedPlanDetails.type + ' ($ ' + (selectedPlanDetails.amount / 100) + ' per ' + selectedPlanDetails.interval + ')',
      email: this.userData.email,
      zipCode: true,
      panelLabel: 'Subscribe'
    };
    handler.open(checkoutConfig);
  }

  changeCardDetails() {
    var handler = window['StripeCheckout'].configure({
      key: environment.stripe_public_key,
      image: 'assets/images/Logo-Full-Black.png',
      locale: 'auto',
      billingAddress: true,
      token: (token) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        let customer = {
          email: this.userData.email,
          uid: this.userData.uid
        };
        let source = token.id;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.profileService.changeCard({ customer, source }).subscribe(data => {
          this.userData.isActive = true;
          this.getSubscriptionData();

          this.dialog.open(MessageDialogComponent, {
            width: '500px',
            data: {
              message: 'Card details updated successfully.',
              description: '',
              primaryBtn: 'Close'
            }
          });


        }, error => {
          alert("Failed to update card details.");
        });
      }
    });

    let checkoutConfig = {
      name: 'Spelldone',
      email: this.userData.email,
      zipCode: true,
      panelLabel: 'Submit'
    };
    handler.open(checkoutConfig);
  }

  getSubscriptionData() {
    this.profileService.getPaymentDetails(this.userData.uid).subscribe(response => {
      console.log(response);
      this.cardDetails = response.json();
    }, error => {
      console.log(error);
    });
  }

  getDate(date: any) {
    return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  resetPassword() {
    this.dialog.open(ChangePasswordComponent, {
      width: '500px',
      data: {
        email: this.userData.email
      }
    });
  }
}
