import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosUpdateComponent } from './pagamentos-update.component';

describe('PagamentosUpdateComponent', () => {
  let component: PagamentosUpdateComponent;
  let fixture: ComponentFixture<PagamentosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
