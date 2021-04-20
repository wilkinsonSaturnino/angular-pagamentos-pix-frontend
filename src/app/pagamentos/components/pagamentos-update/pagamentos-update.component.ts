import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagamento } from '../../classes/pagamento';
import { Pessoa } from '../../classes/pessoa';
import { PagamentosService } from '../../services/pagamentos.service';

@Component({
  selector: 'app-pagamentos-update',
  templateUrl: './pagamentos-update.component.html',
  styleUrls: ['./pagamentos-update.component.css']
})
export class PagamentosUpdateComponent implements OnInit {

  idPagamento: number;
  idPessoa: number;
  pagamento: Pagamento;
  pessoa: Pessoa;

  constructor(private pagamentosService: PagamentosService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    // Carrega Pagamento
    this.pagamento = new Pagamento;
    this.idPagamento = this.route.snapshot.params['idPagamento'];
    this.pagamentosService.getPagamentoById(this.idPagamento)
      .subscribe(pag => {
      console.log(pag) 
      this.pagamento = pag;
    }, error => console.log(error));

    // Carrega Pessoa
    this.pessoa = new Pessoa;
    this.idPessoa = this.route.snapshot.params['idUsuario'];
    this.pagamentosService.getUsuarioById(this.idPessoa)
      .subscribe(usuario => {
      console.log(usuario) 
      this.pessoa = usuario;
    }, error => console.log(error));
    
  }

  onSubmit() {
    this.atualizarPagamento();
  }

  atualizarPagamento() {
    this.pagamentosService.updatePagamento(this.idPagamento, this.pessoa.id, this.pagamento).subscribe(pag => {
      console.log(pag);
      this.router.navigate(['/pagamentos', this.idPessoa]);
    },
    error => console.log(error));
  }

  goToPagamentosList(): void {
    this.router.navigate(['/pagamentos', this.idPessoa]);
  }

}
