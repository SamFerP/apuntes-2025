import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamanthaComponent } from './samantha.component';

describe('SamanthaComponent', () => {
  let component: SamanthaComponent;
  let fixture: ComponentFixture<SamanthaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamanthaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SamanthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
