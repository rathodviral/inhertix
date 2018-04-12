import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SortAlphabaticallyPipe} from './sort-alphabatically.pipe';
import {AdminAuthGuardService} from './admin-auth-guard.service';
import {AgentAuthGuardService} from './agent-auth-guard.service';
import {RequestInterceptor} from './request.interceptor';
import {ResponseInterceptor} from './response.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SortAlphabaticallyPipe
  ],
  providers: [
    AdminAuthGuardService,
    AgentAuthGuardService,
    RequestInterceptor,
    ResponseInterceptor
  ]
})
export class CoreModule {
}
