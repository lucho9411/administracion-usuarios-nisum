import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersReponse } from '../interfaces/users.interface';
import { environment } from '../../../environments/environment';
import { FormGroup } from '@angular/forms';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly http: HttpClient,
    private readonly loaderService:  LoaderService
  ) { /** */}

  getUsers(): Observable<UsersReponse> {
    return this.http.get<UsersReponse>(`${environment.api}` + '?page=' + environment.page + '&results=' + environment.results);
  }

  saveLocalStorage(users: User[]) : void {
    localStorage.removeItem('users');
    localStorage.removeItem('newData');
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('newData', JSON.stringify(users));
  }

  addNewUser(form: FormGroup): User[] {
    this.loaderService.show();
    let data: any = localStorage.getItem('newData');
    data = JSON.parse(data);
    const newData: User = {
      gender: form.get('gender')?.value,
      name: {
        title: form.get('representation')?.value,
        first: form.get('names')?.value,
        last: form.get('lastnames')?.value
      },
      email: form.get('email')?.value,
      login: {
        username: form.get('username')?.value,
        password: form.get('password')?.value
      },
      cell:form.get('cell')?.value
    };
    data.unshift(newData);
    localStorage.setItem('newData', JSON.stringify(data));
    this.loaderService.hide();
    return data;
  }

  editCurrentUser(form: FormGroup):  User[] {
    this.loaderService.show();
    let data: any = localStorage.getItem('newData');
    data = JSON.parse(data);
    data.forEach((element: User, index: number) => {
      if (element.email === form.get('email')?.value) {
        data[index].login.password = form.get('password')?.value;
        data[index].name.title = form.get('representation')?.value;
        data[index].name.first = form.get('names')?.value;
        data[index].name.last = form.get('lastnames')?.value;
        data[index].gender = form.get('gender')?.value;
        data[index].cell = form.get('cell')?.value;
      }
    });
    localStorage.setItem('newData', JSON.stringify(data));
    this.loaderService.hide();
    return data;
  }

  deleteUser(email: string): User[] {
    this.loaderService.show();
    let data: any = localStorage.getItem('newData');
    data = JSON.parse(data);
    data.forEach((element: User, index: number) => {
      if (email === element.email) {
        data.splice(index, 1);
      }
    });
    localStorage.setItem('newData', JSON.stringify(data));
    this.loaderService.hide();
    return data;
  }
}


