import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrudComponent } from './panel-crud.component';

describe('PanelCrudComponent', () => {
  let component: PanelCrudComponent;
  let fixture: ComponentFixture<PanelCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
