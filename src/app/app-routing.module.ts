import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CommonModule} from "@angular/common";

const routes:Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
