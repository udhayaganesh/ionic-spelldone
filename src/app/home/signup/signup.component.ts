import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';
import { HomeService } from '../home.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SpinnerService } from 'src/app/spinner/spinner.service';
import { MatDialog } from '@angular/material';
import { SignupStatusComponent } from './signup-status/signup-status.component';
import { Price } from 'src/app/core/enum/enum';
import { TermsAndConditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacyPolicyComponent } from './privacypolicy/privacypolicy.component';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  months = [
    { value: '01', viewValue: '01' },
    { value: '02', viewValue: '02' },
    { value: '03', viewValue: '03' },
    { value: '04', viewValue: '04' },
    { value: '05', viewValue: '05' },
    { value: '06', viewValue: '06' },
    { value: '07', viewValue: '07' },
    { value: '08', viewValue: '08' },
    { value: '09', viewValue: '09' },
    { value: '10', viewValue: '10' },
    { value: '11', viewValue: '11' },
    { value: '12', viewValue: '12' }
  ];

  years = [
  ];
  signUpForm: any;
  countries: any[] = [];
  price = Price;

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private homeService: HomeService,
    private router: Router,
    private spinnerService: SpinnerService,
    private dialog: MatDialog,
    private firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    for (let i = 0; i < 10; i++) {
      this.years.push({
        value: currentYear,
        viewValue: currentYear++
      });
    }

    this.homeService.getCountries().subscribe(response => {
      this.countries = response.json();
    });

    this.signUpForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"),
        Validators.minLength(5),
        Validators.maxLength(50)
      ]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ])
      }, [CustomValidators.areEqual]),
      planDuration: new FormControl('yearly', [
      ]),
      planType: new FormControl('Regional', [Validators.required]),
      creditCardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]{16}$"),
        Validators.minLength(16),
        Validators.maxLength(16)
      ]),
      cardHolderName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      cardAddress: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      cardCountry: new FormControl('', [
        Validators.required
      ]),
      cardCity: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      cardExpiryDate: new FormGroup({
        creditCardExpirationMonth: new FormControl('', [
          Validators.required
        ]),
        creditCardExpirationYear: new FormControl('', [
          Validators.required
        ]),
      }, [CustomValidators.validDate]),
      securityCode: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]{3}$")
      ]),
      addressZip: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]{5,6}$")
      ]),
      agreeConditions: new FormControl(false, [])
    });
  }

  validateNumber(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
      return true;
    } else if (key < 48 || key > 57) {
      return false;
    } else {
      return true;
    }
  }

  signUp(userRegistrationForm: FormGroup) {
    const value = this.signUpForm.value;
    this.spinnerService.show();
    let source = {
      name: value.cardHolderName,
      number: value.creditCardNumber,
      exp_month: value.cardExpiryDate.creditCardExpirationMonth,
      exp_year: value.cardExpiryDate.creditCardExpirationYear,
      cvc: value.securityCode,
      address_city: value.cardCity,
      address_country: value.cardCountry,
      address_zip: value.addressZip
    }

    let customer = {
      name: value.name,
      email: value.email,
      password: value.passwordGroup.password,
      uid: value.$uid,
      address: value.cardAddress,
      city: value.cardCity,
      country: value.cardCountry,
      zipCode: value.addressZip,
      isTrial: false
    };

    let subscription = {
      planDuration: value.planDuration,
      planType: value.planType
    };

    this.authService.signUp({ customer, subscription, source }).subscribe((response: any) => {
      console.log(response);
      this.spinnerService.hide();
      const data = response.json();
      this.showSignupStatus(data);
      if (data.account) {
        this.authService.sendVerificationMail(customer.email, customer.password);
      }
    }, error => {
      this.spinnerService.hide();
      const data = error.json();
      this.showSignupStatus(data);
      if (data.account) {
        this.authService.sendVerificationMail(customer.email, customer.password);
      }
    });
  }

  showSignupStatus(data: any) {
    const dialogRef = this.dialog.open(SignupStatusComponent, {
      width: '500px',
      data
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response === 'SUCCESS') {
        this.router.navigate(['login']);
      }
    });
  }

  getPrice() {
    return this.price[this.signUpForm.value.planType.toUpperCase()];
  }

  termsandconditions() {
    this.dialog.open(TermsAndConditionsComponent, {
      width: '800px',
    });
  }

  privacyPolicy() {
    this.dialog.open(PrivacyPolicyComponent, {
      width: '800px',
    });
  }
}