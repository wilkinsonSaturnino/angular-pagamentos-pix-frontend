import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../classes/pessoa';
import { Conta } from '../../classes/conta';
import { PagamentosService } from '../../services/pagamentos.service';

@Component({
  selector: 'app-contas-list',
  templateUrl: './contas-list.component.html',
  styleUrls: ['./contas-list.component.css']
})
export class ContasListComponent implements OnInit {

  idPessoa: number;
  pessoa: Pessoa;
  contas: Conta[] = new Array;

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

    this.listarContasPorUsuario();
  }

  private listarContasPorUsuario() {
    this.pagamentosService.getContasByUsuario(this.idPessoa).subscribe(conta => {
      this.contas = conta;
      /* Ordena o Array de objetos por Destinatário */
      this.contas.sort((a, b) => (a.pessoa.nome > b.pessoa.nome) ? 1 : -1);
    });
  }

  goToContasAdd(): void {
    this.router.navigate(['/contas-add']);
  }

  goToUsuariosFind(): void {
    this.router.navigate(['/usuarios-find']);
  }

  goToContasUpdate(idConta: number): void {
    this.router.navigate(['/contas-update', idConta, this.idPessoa]);
  }

  deletarConta(conta: Conta) {
    if (confirm('Deseja remover a conta ' + conta.numeroConta + '-' + conta.digito + 
    ', Ag.: ' + conta.numeroAgencia + '?')) {
      this.pagamentosService.deleteConta(conta.id).subscribe(conta => {
        console.log(conta);
        this.listarContasPorUsuario();
      });
    }
  }  

}
