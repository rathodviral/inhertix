import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AgentDashboardComponent} from './agent-dashboard/agent-dashboard.component';

const routes:Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: AgentDashboardComponent}
];

@NgModule({
  declarations: [
    AgentDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AgentRoutingModule {
}
