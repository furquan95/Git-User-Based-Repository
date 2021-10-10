import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from './cache.service';


@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheService:CacheService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('hi this is cache interceptor')

    const cachedResponse = this.cacheService['cache'][request.urlWithParams] || null;

    if(cachedResponse){
      console.log('response from cache')
      return of(cachedResponse)
    }

    return next.handle(request).pipe(tap(event=>{
      if(event instanceof HttpResponse){
        this.cacheService['cache'][request.urlWithParams] = event;
        console.log("response from server")
      }
    }))
  }
}
