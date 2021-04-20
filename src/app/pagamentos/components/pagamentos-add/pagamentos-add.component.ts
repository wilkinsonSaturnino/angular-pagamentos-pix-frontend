import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagamento } from '../../classes/pagamento';
import { Pessoa } from '../../classes/pessoa';
import { PagamentosService } from '../../services/pagamentos.service';

@Component({
  selector: 'app-pagamentos-add',
  templateUrl: './pagamentos-add.component.html',
  styleUrls: ['./pagamentos-add.component.css']
})
export class PagamentosAddComponent implements OnInit {
  
  idPessoa: number;
  pessoa: Pessoa;
  pagamento: Pagamento = new Pagamento;

  constructor(private pagamentosService: PagamentosService, 
    private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.pessoa = new Pessoa;
    this.idPessoa = this.route.snapshot.params['id'];
    this.pagamentosService.getUsuarioById(this.idPessoa)
      .subscribe(usuario => {
      console.log(usuario) 
      this.pessoa = usuario;
    }, error => console.log(error));
  }

  onSubmit() {
    this.salvarPagamento();
  }

  salvarPagamento() { 
    this.pagamentosService.addPagamento(this.idPessoa, this.pagamento).subscribe(pagamento => {
      console.log(pagamento);
      this.router.navigate(['/pagamentos', this.idPessoa]);
    },
    error => console.log(error));
  }

  goToUsuariosFind(): void {
    this.router.navigate(['/usuarios-find']);
  }

}
