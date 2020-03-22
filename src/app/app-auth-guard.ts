import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserEditComponent } from './user-details/user-edit/user-edit.component';

export class AuthGuard implements CanActivate, CanDeactivate<UserEditComponent> {

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canDeactivate(component: UserEditComponent): boolean {
    return component.canDeactivate();
  }

}