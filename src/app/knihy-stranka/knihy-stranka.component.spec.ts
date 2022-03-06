import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnihyStrankaComponent } from './knihy-stranka.component';

describe('KnihyStrankaComponent', () => {
  let component: KnihyStrankaComponent;
  let fixture: ComponentFixture<KnihyStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnihyStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnihyStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
