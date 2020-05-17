import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent implements OnInit {

  userData: any;

  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit() {
    this.userData = this.storageService.getUser();
  }

  logout() {
    this.storageService.logout();
    this.router.navigate(['login']);
  }
}