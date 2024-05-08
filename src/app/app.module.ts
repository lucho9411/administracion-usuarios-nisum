import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app.routes";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { AtomicModule } from "./atomic/atomic.module";
import { LoaderInterceptor } from "./config/interceptors/loader.interceptor";
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    AtomicModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    MessageService,
    ConfirmationService
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
