import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel-filtros',
  templateUrl: './panel-filtros.component.html',
  styleUrl: './panel-filtros.component.scss'
})
export class PanelFiltrosComponent {

  @Output() filterTable = new EventEmitter<FormGroup>();
  @Output() reset = new EventEmitter<boolean>();

  myForm: FormGroup

  constructor(
    private readonly formBuilder: FormBuilder
  ){
    this.createForm();
  }

  createForm(): void {
    this.myForm = this.formBuilder.group({
      username: new FormControl(undefined, [Validators.required]),
      email: new FormControl(undefined, [Validators.required]),
      names: new FormControl(undefined, [Validators.required]),
      lastnames: new FormControl(undefined, [Validators.required]),
      gender: new FormControl(undefined, [Validators.required]),
      cell: new FormControl(undefined, [Validators.required])
    });
  }

  filter(): void {
    this.filterTable.emit(this.myForm);
  }

  resetFilter(): void {
    this.myForm.reset();
    this.reset.emit(true);
  }

}
