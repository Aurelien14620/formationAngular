import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddPrestationsComponent } from './page-add-prestations.component';

describe('PageAddPrestationsComponent', () => {
  let component: PageAddPrestationsComponent;
  let fixture: ComponentFixture<PageAddPrestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAddPrestationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddPrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
