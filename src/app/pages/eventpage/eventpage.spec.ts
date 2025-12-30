import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventpage } from './eventpage';

describe('Eventpage', () => {
  let component: Eventpage;
  let fixture: ComponentFixture<Eventpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
