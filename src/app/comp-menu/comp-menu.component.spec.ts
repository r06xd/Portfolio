import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMenuComponent } from './comp-menu.component';

describe('CompMenuComponent', () => {
  let component: CompMenuComponent;
  let fixture: ComponentFixture<CompMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
