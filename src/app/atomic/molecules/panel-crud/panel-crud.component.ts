import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../core/interfaces/users.interface';
import { FormGroup } from '@angular/forms';
import { Utils } from '../../../shared/classess/utils' ;

@Component({
  selector: 'app-panel-crud',
  templateUrl: './panel-crud.component.html',
  styleUrl: './panel-crud.component.scss'
})
export class PanelCrudComponent {

  @Output() reLoadTable = new EventEmitter<boolean>();
  @Output() addUserEmit = new EventEmitter<any>();
  @Output() deleteUserEmit = new EventEmitter<string>();

  @Input() users: User[];

  usersFilter: User[];

  utils: any;

  constructor(){
    this.utils = new Utils();
  }

  reLoad(): void {
    this.reLoadTable.emit(true);
  }

  filterTable(form: FormGroup): void {
    this.usersFilter = this.utils.filterTable(form, this.users);
  }

  resetFilter(): void {
    this.usersFilter = this.users;
  }

  addUser(flag: number, user?: User): void {
    this.addUserEmit.emit({status: true, flag, user });
  }

  deleteUser(email: string): void {
    this.deleteUserEmit.emit(email);
  }

}
