import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshboardPageComponent } from './deshboard-page.component';

describe('DeshboardPageComponent', () => {
  let component: DeshboardPageComponent;
  let fixture: ComponentFixture<DeshboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeshboardPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeshboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
