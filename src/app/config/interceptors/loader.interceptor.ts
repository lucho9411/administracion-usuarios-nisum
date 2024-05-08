import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { LoaderService } from '../../core/services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private readonly loaderService:  LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    const requestClone = request.clone();
    return next.handle(requestClone).pipe(
      catchError((error: HttpErrorResponse) => {
        this.loaderService.hide();
        return throwError( error );

      }),finalize(() => {
        this.loaderService.hide();
      }),
    );
  }

}