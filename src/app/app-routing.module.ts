import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagamentosAddComponent } from './pagamentos/components/pagamentos-add/pagamentos-add.component';
import { PagamentosListComponent } from './pagamentos/components/pagamentos-list/pagamentos-list.component';
import { PagamentosUpdateComponent } from './pagamentos/components/pagamentos-update/pagamentos-update.component';
import { PessoaAddComponent } from './pagamentos/components/pessoa-add/pessoa-add.component';
import { PessoaFindComponent } from './pagamentos/components/pessoa-find/pessoa-find.component';
import { PessoaListComponent } from './pagamentos/components/pessoa-list/pessoa-list.component';
import { PessoaUpdateComponent } from './pagamentos/components/pessoa-update/pessoa-update.component';

const routes: Routes = [
  {path: 'pagamentos/:idUsuario', component: PagamentosListComponent},
  {path: 'pagamentos-add/:id', component: PagamentosAddComponent},
  {path: 'pagamentos-update/:idPagamento/:idUsuario', component: PagamentosUpdateComponent},
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
