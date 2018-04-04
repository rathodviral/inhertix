import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
