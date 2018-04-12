import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {CommonService} from './common.service';
import {Observable} from "rxjs/Rx";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(public common:CommonService) {
  }

  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.common.getLocalStorageString('tokan')}`
      }
    });

    return next.handle(request);
  }
}
