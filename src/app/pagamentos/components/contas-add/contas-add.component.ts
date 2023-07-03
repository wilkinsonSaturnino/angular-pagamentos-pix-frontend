import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from '../../classes/conta';
import { Pessoa } from '../../classes/pessoa';
import { PagamentosService } from '../../services/pagamentos.service';

@Component({
  selector: 'app-contas-add',
  templateUrl: './contas-add.component.html',
  styleUrls: ['./contas-add.component.css']
})
export class ContasAddComponent implements OnInit {

  idPessoa: number;
  pessoa: Pessoa;
  conta: Conta = new Conta;

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
    this.salvarConta();
  }  

  salvarConta() { 
    this.pagamentosService.addConta(this.idPessoa, this.conta).subscribe(conta => {
      console.log(conta);
      this.router.navigate(['/contas', this.idPessoa]);
    },
    error => console.log(error));
  }

  goToUsuariosFind(): void {
    this.router.navigate(['/usuarios-find']);
  }

}
