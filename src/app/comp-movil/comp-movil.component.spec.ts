import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMovilComponent } from './comp-movil.component';

describe('CompMovilComponent', () => {
  let component: CompMovilComponent;
  let fixture: ComponentFixture<CompMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompMovilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
