import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Output() cancelEmit = new EventEmitter<boolean>();
  @Output() saveEmit = new EventEmitter<FormGroup>();

  @Input() visible: boolean;

  title: string;
  subTitle: string;

  form: FormGroup;

  representation: string[];

  event: number;

  constructor(
    private readonly formBuilder: FormBuilder
  ){
    this.createForm();
    this.representation = [
      'Mr',
      'Miss'
    ]
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      email: new FormControl(undefined, [Validators.required, Validators.email]),
      username: new FormControl(undefined, [Validators.required]),
      password: new FormControl(undefined, [Validators.required]),
      representation: new FormControl(undefined, [Validators.required]),
      names: new FormControl(undefined, [Validators.required]),
      lastnames: new FormControl(undefined, [Validators.required]),
      gender: new FormControl(undefined, [Validators.required]),
      cell: new FormControl(undefined, [Validators.required])
    });
  }

  cancel(): void {
    this.visible = false;
    this.cancelEmit.emit(true);
  }

  save(): void {
    this.visible = false;
    this.saveEmit.emit(this.form);
  }

}
