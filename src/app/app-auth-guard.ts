import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, CanDeactivate, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserEditComponent } from './user-details/user-edit/user-edit.component';

interface User {
  id: number,
  name: string
}

export class AuthGuard implements CanActivate, CanDeactivate<UserEditComponent>, Resolve<User> {

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canDeactivate(component: UserEditComponent): boolean {
    return component.canDeactivate();
  }

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
      return {
        id: 5,
        name: 'tintin'
      }
  }

}