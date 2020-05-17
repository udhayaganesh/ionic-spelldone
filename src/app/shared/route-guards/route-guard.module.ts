import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth.guard";
import { LoginGuard } from "./login.guard";

@NgModule({
  providers: [AuthGuard, LoginGuard]
})

export class RouteGuardsModule { };