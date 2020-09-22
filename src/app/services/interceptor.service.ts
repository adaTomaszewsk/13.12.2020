import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {SessionStorageService} from './session-storage';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private sessionService: SessionStorageService) {
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const reqUrl = 'http://localhost:8080';
    req = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + this.sessionService.get('currentUser').token
      ),
      url: reqUrl + '' + req.url
    });
    return next.handle(req);
  }
}
