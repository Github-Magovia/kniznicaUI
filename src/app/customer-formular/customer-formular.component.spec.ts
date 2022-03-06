
import {CustomerFormularComponent} from "./customer-formular.component";
import {TestBed} from "@angular/core/testing";


describe('CustomerFormularComponent', () => {
  let component: CustomerFormularComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerFormularComponent]
    })
      .compileComponents();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
