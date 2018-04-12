import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {LayoutModule} from './layout/layout.module';
import {AdminModule} from './admin/admin.module';
import {AgentModule} from './agent/agent.module';
import {UserModule} from './user/user.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    AdminModule,
    AgentModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
