import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFiltrosComponent } from './panel-filtros.component';

describe('PanelFiltrosComponent', () => {
  let component: PanelFiltrosComponent;
  let fixture: ComponentFixture<PanelFiltrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelFiltrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
