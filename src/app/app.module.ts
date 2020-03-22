import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './app-auth-guard';
import { UserEditComponent } from './user-details/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserDetailsComponent,
    UserComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
