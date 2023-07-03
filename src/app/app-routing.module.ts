import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagamentosAddComponent } from './pagamentos/components/pagamentos-add/pagamentos-add.component';
import { PagamentosListComponent } from './pagamentos/components/pagamentos-list/pagamentos-list.component';
import { PagamentosUpdateComponent } from './pagamentos/components/pagamentos-update/pagamentos-update.component';
import { PessoaAddComponent } from './pagamentos/components/pessoa-add/pessoa-add.component';
import { PessoaFindComponent } from './pagamentos/components/pessoa-find/pessoa-find.component';
import { PessoaListComponent } from './pagamentos/components/pessoa-list/pessoa-list.component';
import { PessoaUpdateComponent } from './pagamentos/components/pessoa-update/pessoa-update.component';
import { ContasUpdateComponent } from './pagamentos/components/contas-update/contas-update.component';
import { ContasAddComponent } from './pagamentos/components/contas-add/contas-add.component';
import { ContasListComponent } from './pagamentos/components/contas-list/contas-list.component';

const routes: Routes = [
  {path: 'pagamentos/:idUsuario', component: PagamentosListComponent},
  {path: 'pagamentos-add/:id', component: PagamentosAddComponent},
  {path: 'pagamentos-update/:idPagamento/:idUsuario', component: PagamentosUpdateComponent},
  {path: 'contas/:idUsuario', component: ContasListComponent},
  {path: 'contas-add/:id', component: ContasAddComponent},
  {path: 'contas-update/:idConta/:idUsuario', component: ContasUpdateComponent},  
  {path: 'usuarios', component: PessoaListComponent},
  {path: 'usuarios-add', component: PessoaAddComponent},
  {path: 'usuarios-update/:id', component: PessoaUpdateComponent},
  {path: 'usuarios-find', component: PessoaFindComponent},
  {path: '', redirectTo: 'usuarios-find', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
