import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from './app-auth-guard';
import { UserEditComponent } from './user-details/user-edit/user-edit.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'users', component: UserComponent, children: [
    { path: ':id', resolve: { user: AuthGuard }, canActivate: [AuthGuard], component: UserDetailsComponent, children: [
      { path: 'edit', canDeactivate: [AuthGuard], component: UserEditComponent }
    ] }
  ] },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
