import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompWebComponent } from './comp-web.component';

describe('CompWebComponent', () => {
  let component: CompWebComponent;
  let fixture: ComponentFixture<CompWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
