import { NgModule } from "@angular/core";
//import { SearchComponent } from './search.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CoreModule, SharedModule],
  declarations: [],
  providers: []
})
export class SearchModule { }