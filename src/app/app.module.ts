import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { CacheInterceptor } from './cache.interceptor';
import { CacheService } from './cache.service';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    UserDetailsComponent,
    SearchboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
    NgbPaginationModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi:true
    },
    CacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
