import {Injectable} from '@angular/core';
import {CanLoad} from '@angular/router';

@Injectable()
export class AdminAuthGuardService implements CanLoad {
  canLoad() {
    console.log('AdminAuthGuard#canLoad called');
    return true;
  }
}
