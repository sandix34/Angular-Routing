import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from './app-auth-guard';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'users', component: UserComponent, children: [
    { path: ':id', canActivate: [AuthGuard], component: UserDetailsComponent }
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
