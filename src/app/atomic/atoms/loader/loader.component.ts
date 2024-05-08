import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../../core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  constructor(
    private readonly loaderService: LoaderService
  ){}

  isLoading: Subject<boolean> = this.loaderService.isLoading;

}
