import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFindComponent } from './pessoa-find.component';

describe('PessoaFindComponent', () => {
  let component: PessoaFindComponent;
  let fixture: ComponentFixture<PessoaFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaFindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
