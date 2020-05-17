import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    FeedbackComponent,
    NavFooterComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [NavFooterComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
