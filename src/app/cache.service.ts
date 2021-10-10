import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'


abstract class HttpCache {
  abstract get(req: HttpRequest<any>): HttpResponse<any>|null;
  abstract put(req: HttpRequest<any>, resp: HttpResponse<any>):void;
}


@Injectable()
export class CacheService implements HttpCache{
    private cache:any = {};

    put(req: HttpRequest<any>, resp: HttpResponse<any>):void{
      this.cache[req.urlWithParams] = resp;
      var expiryTime = Date.now() +60000;
      localStorage.setItem(`cache[${req.urlWithParams}]`, JSON.stringify(resp));
      console.log('cache service put req')
    }

    get(req: HttpRequest<any>): HttpResponse<any>|null{
      console.log('cache service get req')
      return this.cache[req.urlWithParams]
    }

    invalidateCache(): void {  
      this.cache = { };  
    }
}
