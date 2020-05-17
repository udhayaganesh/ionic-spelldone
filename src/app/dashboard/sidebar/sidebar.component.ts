import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() rootModules: any;
  @Input() currentSetInfo: any;
  @Input() isFirstLoad: boolean;
  @Input() embedInDashboard: boolean;
  @Output() getSets = new EventEmitter<any>();

  loading = false;
  collapseAll: boolean;
  expandAll: boolean;
  activeRootModule: any;
  activeModule: any;
  activeLevel: any;
  userData: any;
  constructor(private router: Router, private storageService: StorageService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loading = true;
    this.userData = this.storageService.getUser();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.rootModules.map(rootModule => {
        if (rootModule.expand || this.isFirstLoad) {
          if (this.isFirstLoad) {
            rootModule.expand = true;
          }
          rootModule.collapseAll = false;
          let rootElm: any = document.getElementById('rm-' + rootModule.id).nextSibling;
          rootElm.style.maxHeight = (rootModule.modules.length * 40) + 'px';

          rootModule.modules.map(item => {
            if (item.expand || this.isFirstLoad) {
              if (this.isFirstLoad) {
                item.expand = true;
              }
              item.collapseAll = false;
              let elm: any = document.getElementById('md-' + item.id);
              elm['parentElement'].parentElement.style.maxHeight = (parseInt(elm['parentElement'].parentElement.style.maxHeight) + (item.levels.length * 40)) + 'px';
              elm['nextSibling'].style.maxHeight = (item.levels.length * 40) + 'px';
            }
          });
        }
      });
    });
  }

  getSetsDetail(rootModule: any, subModule: any, level: any) {
    this.activeRootModule = rootModule.id;
    this.activeModule = subModule.id;
    this.activeLevel = level.id;
    this.getSets.emit({ rootModule, module: subModule, level });
  }

  toggleRootModule(event: Event, rootModule: any) {
    rootModule.expand = !rootModule.expand;
    this.loading = false;
    if (rootModule.expand) {
      rootModule.collapseAll = false;
      event.currentTarget['nextSibling'].style.maxHeight = (rootModule.modules.length * 40) + 'px';
    } else {
      event.currentTarget['nextSibling'].style.maxHeight = 0;
      event.currentTarget['nextSibling'].querySelector('ul').style.maxHeight = 0;
      rootModule.modules.map((item) => {
        item.expand = false;
      });
    }
  }

  toggleModule(event: Event, subModule: any) {
    subModule.expand = !subModule.expand;
    this.loading = false;
    if (subModule.expand) {
      subModule.collapseAll = false;
      event.currentTarget['parentElement'].parentElement.style.maxHeight = (parseInt(event.currentTarget['parentElement'].parentElement.style.maxHeight) + (subModule.levels.length * 40)) + 'px';
      event.currentTarget['nextSibling'].style.maxHeight = (subModule.levels.length * 40) + 'px';
    } else {
      event.currentTarget['nextSibling'].style.maxHeight = 0;
    }
  }

  toggleModules(open: boolean) {
    this.collapseAll = open;
    if (this.collapseAll) {
      this.expandAll = false;
      this.rootModules.map((rootModule) => {
        rootModule.expand = false;
        rootModule.collapseAll = true;
        rootModule.modules.map((item) => {
          item.expand = false;
          item.collapseAll = true;
        });
      });
    } else {
      this.expandAll = true;
      this.rootModules.map((rootModule) => {
        rootModule.expand = true;
        rootModule.collapseAll = false;
        rootModule.modules.map((item) => {
          item.expand = true;
          item.collapseAll = false;
        });
      });
    }
  }

}
