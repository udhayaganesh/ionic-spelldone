import { NgModule } from "@angular/core";
import { CoreModule } from '../core/core.module';
import { WordDetailComponent } from './word-detail/word-detail.component';
import { SearchService } from './serch.service';
import { LogService } from './log.service';
import { StorageService } from './services/storage.service';
import {
  MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule,
  MatCheckboxModule, MatSelectModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatDividerModule
} from '@angular/material';
import { ToastrModule } from 'ngx-toastr';

import { AuthService } from './services/auth.service';
import { RouteGuardsModule } from './route-guards/route-guard.module';
import { DialogModule } from './dialogs/dialog.module';
import { HeaderComponent } from './header/header.component';
import { MessageService } from './services/message.service';

@NgModule({
  imports: [
    CoreModule,
    DialogModule,
    RouteGuardsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true
    })
  ],
  declarations: [WordDetailComponent, HeaderComponent],
  exports: [WordDetailComponent,
    HeaderComponent,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [AuthService, SearchService, LogService, MessageService,  StorageService]
})
export class SharedModule { }