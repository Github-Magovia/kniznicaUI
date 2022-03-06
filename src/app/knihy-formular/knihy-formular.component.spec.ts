import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnihyFormularComponent } from './knihy-formular.component';

describe('KnihyFormularComponent', () => {
  let component: KnihyFormularComponent;
  let fixture: ComponentFixture<KnihyFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnihyFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnihyFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
