import { 
    CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    Router,
    CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private authGaurd: AuthService,
        private router: Router) {
    console.log( 'AuthGuardService ctor');
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            console.log('canActivate() called');
            return this.authGaurd.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    console.log('authenticated: ' + authenticated);
                    if (authenticated) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                }
            );
    }
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.canActivate(route, state);
        }
}