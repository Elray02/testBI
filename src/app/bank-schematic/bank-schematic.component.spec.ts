
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSchematicComponent } from './bank-schematic.component';

describe('BankSchematicComponent', () => {
  let component: BankSchematicComponent;
  let fixture: ComponentFixture<BankSchematicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BankSchematicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankSchematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
