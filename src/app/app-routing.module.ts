import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AdminAuthGuardService} from './core/admin-auth-guard.service';
import {AgentAuthGuardService} from './core/agent-auth-guard.service';

const routes:Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canLoad:[AdminAuthGuardService]},
  {path: 'agent', loadChildren: 'app/agent/agent.module#AgentModule', canLoad:[AgentAuthGuardService]},
  {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
