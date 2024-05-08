import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomicModule } from '../atomic/atomic.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtomicModule,
    ToastModule,
    ConfirmDialogModule
  ],
  exports: [
    AtomicModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class SharedModule { }
