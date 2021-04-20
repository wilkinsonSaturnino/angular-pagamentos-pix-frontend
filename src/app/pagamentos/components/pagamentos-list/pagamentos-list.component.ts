import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagamento } from '../../classes/pagamento';
import { Pessoa } from '../../classes/pessoa';
import { PagamentosService } from '../../services/pagamentos.service';

@Component({
  selector: 'app-pagamentos-list',
  templateUrl: './pagamentos-list.component.html',
  styleUrls: ['./pagamentos-list.component.css']
})
export class PagamentosListComponent implements OnInit {

  idPessoa: number;
  pessoa: Pessoa;
  pagamentos: Pagamento[] = new Array;

  constructor(private pagamentosService: PagamentosService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.pessoa = new Pessoa;
    this.idPessoa = this.route.snapshot.params['idUsuario'];
    this.pagamentosService.getUsuarioById(this.idPessoa)
      .subscribe(usuario => {
        console.log(usuario)
        this.pessoa = usuario;
      }, error => console.log(error));

    this.listarPagamentosPorUsuario();
  }

  private listarPagamentosPorUsuario() {
    this.pagamentosService.getPagamentosByUsuario(this.idPessoa).subscribe(pagamento => {
      this.pagamentos = pagamento;
      /* Ordena o Array de objetos por Destinatário */
      this.pagamentos.sort((a, b) => (a.nomeDestinatario > b.nomeDestinatario) ? 1 : -1);
    });
  }

  goToPagamentoAdd(): void {
    this.router.navigate(['/pagamentos-add']);
  }

  goToUsuariosFind(): void {
    this.router.navigate(['/usuarios-find']);
  }

  goToPagamentoUpdate(idPagamento: number): void {
    this.router.navigate(['/pagamentos-update', idPagamento, this.idPessoa]);
  }

  deletarPagamento(pagamento: Pagamento) {
    if (confirm('Deseja remover o pagamento ' + pagamento.descricao + '?')) {
      this.pagamentosService.deletePagamento(pagamento.id).subscribe(pagamento => {
        console.log(pagamento);
        this.listarPagamentosPorUsuario();
      });
    }
  }
}
