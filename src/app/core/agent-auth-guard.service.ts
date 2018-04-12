import {Injectable} from '@angular/core';
import {CanLoad} from '@angular/router';

@Injectable()
export class AgentAuthGuardService implements CanLoad {
  canLoad() {
    console.log('AgentAuthGuard#canActivate called');
    return true;
  }
}
