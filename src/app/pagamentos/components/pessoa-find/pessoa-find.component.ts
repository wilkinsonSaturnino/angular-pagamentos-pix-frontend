import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../../classes/pessoa';
import { PagamentosService } from '../../services/pagamentos.service';

@Component({
  selector: 'app-pessoa-find',
  templateUrl: './pessoa-find.component.html',
  styleUrls: ['./pessoa-find.component.css']
})
export class PessoaFindComponent implements OnInit {

  pessoa: Pessoa = new Pessoa;
  usuarios: Pessoa[] = new Array;

  constructor(private pagamentosService: PagamentosService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.buscarUsuarioPorNome();
  }

  buscarUsuarioPorNome() {
    this.pagamentosService.getUsuarioByNome(this.pessoa.nome).subscribe(usuario => {
      this.usuarios = usuario;
      /* Ordena o Array de objetos por nome */
      this.usuarios.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
    });
  }

  goToPagamentosList(idUsuario: number): void {
    this.router.navigate(['/pagamentos', idUsuario]);
  }  

  goToPagamentoAdd(id: number): void {
    this.router.navigate(['/pagamentos-add', id]);
  }

  goToMontantePorMes(idUsuario: number) {
    this.router.navigate(['/montante-por-mes', idUsuario]);
  }

  openDialog(): void {
    console.log('Implementar o dialog do Bootstrap com select dentro.');
  } 

}
