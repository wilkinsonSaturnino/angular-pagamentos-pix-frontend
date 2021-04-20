import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PagamentosListComponent } from './components/pagamentos-list/pagamentos-list.component';
import { PagamentosAddComponent } from './components/pagamentos-add/pagamentos-add.component';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaAddComponent } from './components/pessoa-add/pessoa-add.component';
import { PagamentosService } from './services/pagamentos.service';
import { PessoaUpdateComponent } from './components/pessoa-update/pessoa-update.component';
import { PessoaFindComponent } from './components/pessoa-find/pessoa-find.component';
import { PagamentosUpdateComponent } from './components/pagamentos-update/pagamentos-update.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    PagamentosListComponent, 
    PagamentosAddComponent, 
    PessoaListComponent, 
    PessoaAddComponent, 
    PessoaUpdateComponent, 
    PessoaFindComponent, 
    PagamentosUpdateComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    PagamentosService
  ]
})
export class PagamentosModule { }
