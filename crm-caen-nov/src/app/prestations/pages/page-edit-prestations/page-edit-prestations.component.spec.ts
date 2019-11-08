import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditPrestationsComponent } from './page-edit-prestations.component';

describe('PageEditPrestationsComponent', () => {
  let component: PageEditPrestationsComponent;
  let fixture: ComponentFixture<PageEditPrestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditPrestationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditPrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
