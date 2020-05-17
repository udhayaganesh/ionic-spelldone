import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../shared/services/storage.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomeComponent implements OnInit {
  active = 'mission';
  userData: any;
  isLoading = true;
  constructor(private authService: AuthService, private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService) { }

  ngOnInit() {
    this.userData = this.storageService.getUser();

    if (!this.userData) {
      if (this.storageService.checkToken()) {

        const token = this.storageService.getToken();
        // this.spinnerService.show();

        // get user data from DB.
        this.authService.signIn({ token }).subscribe((response: any) => {
          let data = response.json();
          this.storageService.setUser(data.userData);
          this.storageService.setSubscription(data.subscription);
          this.userData = this.storageService.getUser();
          this.isLoading = false;
          // this.spinnerService.hide();
          /* if (data.userData.isActive) {
            observer.next(true);
          } else {
            this.router.navigate(['/profile']);
          } */
        }, error => {
          // this.spinnerService.hide();
          this.isLoading = false;
        });
      } else {
        this.isLoading = false;
      }
    } else {
      this.isLoading = false;
    }
  }

  logout() {
    this.storageService.logout();
    this.router.navigate(['login']);
  }
}