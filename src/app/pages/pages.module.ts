import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { CrudComponent } from './crud/crud.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
