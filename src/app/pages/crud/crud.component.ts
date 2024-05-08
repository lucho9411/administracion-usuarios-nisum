import { Component, OnDestroy, ViewChild } from '@angular/core';
import { UsersService } from '../../core/services/users.service';
import { User, UsersReponse } from '../../core/interfaces/users.interface';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnDestroy{

  suscriptionForm$:Subscription;

  @ViewChild('crud') crud: any;
  @ViewChild('modal') modal: any;

  users: User[];

  visible: boolean;

  event: number;

  constructor(
    private readonly usersService: UsersService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ){
    this.getUsers();
  }

  getUsers(): void {
    this.users = [];
    this.suscriptionForm$ = this.usersService.getUsers().subscribe({
      next: (data: UsersReponse) => {
        this.users = data.results;
        this.usersService.saveLocalStorage(this.users);
        this.crud.users = this.users;
        this.crud.usersFilter = this.users;
      },
      error: (error: any) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al cargar los usuarios' });
      }
    });
  }

  reLoad(event: boolean): void {
    event?this.getUsers():null;
  }

  filterTable(event: FormGroup): void  {
    this.crud.filterTable(event);
  }

  resetFilter(event: boolean): void {
    event?this.crud.resetFilter():null;
  }

  addEditUser(event: any): void {
    event.status?this.visible=true:this.visible=false;
    if (event.flag===1) {
      this.modal.title='Crear Usuario';
      this.modal.subTitle='Crear fácilmente un usuario';
      this.modal.form.reset();
    }
    else if(event.flag===2) {
      this.modal.title='Editar Usuario';
      this.modal.subTitle='Edita fácilmente un usuario';
      this.modal.form.get('email').setValue(event.user.email);
      this.modal.form.get('username').setValue(event.user.login.username);
      this.modal.form.get('password').setValue(event.user.login.password);
      this.modal.form.get('representation').setValue(event.user.name.title);
      this.modal.form.get('names').setValue(event.user.name.first);
      this.modal.form.get('lastnames').setValue(event.user.name.last);
      this.modal.form.get('gender').setValue(event.user.gender);
      this.modal.form.get('cell').setValue(event.user.cell);
    }
    this.event = event.flag;
    this.modal.event = this.event;
  }

  cancelModal(event: any): void {
    event?this.visible=false:null;
  }

  save(event: FormGroup): void {
    if (this.event===1) {
      const data = this.usersService.addNewUser(event);
      if (data&&data!=null) {
        this.success(data, 1);
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al agregar el usuario' });
      }
    }
    else if(this.event===2){
      const data = this.usersService.editCurrentUser(event);
      if (data&&data!=null) {
        this.success(data, 2);
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al modificar el usuario' });
      }
    }
  }

  success(data: User[], id: number): void {
    this.crud.users = [];
    this.crud.usersFilter = [];
    
    this.crud.users = data;
    this.crud.usersFilter = data;
    if (id === 1) {
      this.messageService.add({ severity: 'success', summary: 'Éxitoso', detail: 'Usuario agregado con éxito'});
    }
    else if(id === 2){
      this.messageService.add({ severity: 'success', summary: 'Éxitoso', detail: 'Usuario modificado con éxito' });
    }
    else{
      this.messageService.add({ severity: 'success', summary: 'Éxitoso', detail: 'Usuario eliminado con éxito' });
    }
  }

  deleteUser(event: any): void {
    if (event&&event!==null) {
      this.confirmationService.confirm({
        header: 'Confirmación',
        message: '¿Seguro desea eliminar el usuario?',
        acceptIcon: 'pi pi-check mr-2',
        rejectIcon: 'pi pi-times mr-2',
        rejectButtonStyleClass: 'p-button-outlined p-button-sm',
        acceptButtonStyleClass: 'p-button-sm',
        accept: () => {
          const data = this.usersService.deleteUser(event);
          if (data&&data!=null) {
            this.success(data, 3);
          }
          else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al eliminar el usuario' });
          }
        }
    });
    }
  }

  ngOnDestroy(): void {
    this.suscriptionForm$!==undefined&&this.suscriptionForm$!==null?this.suscriptionForm$.unsubscribe():null;
  }

}
