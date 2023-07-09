import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuymaneComponent } from './buymane.component';

describe('BuymaneComponent', () => {
  let component: BuymaneComponent;
  let fixture: ComponentFixture<BuymaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuymaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuymaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
