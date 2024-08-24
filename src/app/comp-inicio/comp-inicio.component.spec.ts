import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInicioComponent } from './comp-inicio.component';

describe('CompInicioComponent', () => {
  let component: CompInicioComponent;
  let fixture: ComponentFixture<CompInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
