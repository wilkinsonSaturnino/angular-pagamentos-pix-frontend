import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../classes/pessoa';
import { PagamentosService } from '../../services/pagamentos.service';
import { Conta } from '../../classes/conta';

@Component({
  selector: 'app-contas-update',
  templateUrl: './contas-update.component.html',
  styleUrls: ['./contas-update.component.css']
})
export class ContasUpdateComponent implements OnInit {

  idConta: number;
  idPessoa: number;
  conta: Conta;
  pessoa: Pessoa;

  constructor(private pagamentosService: PagamentosService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    // Carrega Conta
    this.conta = new Conta;
    this.idConta = this.route.snapshot.params['idConta'];
    this.pagamentosService.getContaById(this.idConta)
      .subscribe(con => {
      console.log(con) 
      this.conta = con;
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
    this.atualizarConta();
  }

  atualizarConta() {
    this.pagamentosService.updateConta(this.idConta, this.pessoa.id, this.conta).subscribe(con => {
      console.log(con);
      this.router.navigate(['/contas', this.idPessoa]);
    },
    error => console.log(error));
  }

  goToContasList(): void {
    this.router.navigate(['/contas', this.idPessoa]);
  }

}
