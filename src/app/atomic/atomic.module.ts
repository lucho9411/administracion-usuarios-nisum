import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './atoms/top-bar/top-bar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { PanelFiltrosComponent } from './molecules/panel-filtros/panel-filtros.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { TooltipModule } from 'primeng/tooltip';
import { PanelCrudComponent } from './molecules/panel-crud/panel-crud.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { LoaderComponent } from './atoms/loader/loader.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { ModalComponent } from './molecules/modal/modal.component';
import { FieldsetModule } from 'primeng/fieldset';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    TopBarComponent,
    PanelFiltrosComponent,
    PanelCrudComponent,
    LoaderComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    RadioButtonModule,
    InputMaskModule,
    TooltipModule,
    TableModule,
    TagModule,
    ProgressSpinnerModule,
    DialogModule,
    FieldsetModule,
    PasswordModule,
    DropdownModule
  ],
  exports: [
    TopBarComponent,
    PanelFiltrosComponent,
    PanelCrudComponent,
    LoaderComponent,
    ModalComponent
  ]
})
export class AtomicModule { }
