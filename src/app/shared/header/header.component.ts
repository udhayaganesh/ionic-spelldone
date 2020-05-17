import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() hideToggleButton: boolean;
  @Input() isProfilePage: boolean;
  @Output() toggleSidebar = new EventEmitter<any>();
  userData: any;
  constructor(private router: Router,
     private storageService: StorageService,
     private messageService: MessageService) { }

  ngOnInit() {
    this.userData = this.storageService.getUser();
  }

  toggleNavbar() {
    // this.toggleSidebar.emit();
    this.messageService.toggleSidbar();
  }

  logout() {
    this.storageService.logout();
    this.router.navigate(['login']);
  }
}
