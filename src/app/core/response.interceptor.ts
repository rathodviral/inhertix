import {Injectable} from '@angular/core';
import {
  HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import {CommonService} from './common.service';
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";


@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(public common:CommonService) {
  }

  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {

    return next.handle(request).do((event:HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err:any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
        }
      }
    });
  }
}
