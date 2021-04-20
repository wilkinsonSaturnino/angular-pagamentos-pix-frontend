import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosAddComponent } from './pagamentos-add.component';

describe('PagamentosAddComponent', () => {
  let component: PagamentosAddComponent;
  let fixture: ComponentFixture<PagamentosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentosAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
