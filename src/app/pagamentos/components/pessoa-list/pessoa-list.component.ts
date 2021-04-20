import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../../classes/pessoa';
import { PagamentosService } from '../../services/pagamentos.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  usuarios: Pessoa[] = new Array;

  constructor(private pagamentosService: PagamentosService,
    private router: Router) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  private listarUsuarios() {
    this.pagamentosService.getUsuariosList().subscribe(usuario => {
      this.usuarios = usuario;
      /* Ordena o Array de objetos por nome */
      this.usuarios.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
    });
  }

  goToUsuarioAdd(): void {
    this.router.navigate(['/usuarios-add']);
  }

  goToUsuarioUpdate(id: number): void {
    this.router.navigate(['/usuarios-update', id]);
  }

  deletarUsuario(usuario: Pessoa) {
    if (confirm('Deseja remover o usuário ' + usuario.nome + '? Todos os pagamentos cadastrados '
      + 'para este usuário também serão removidos.')) {

      this.pagamentosService.deleteUsuario(usuario.id).subscribe(usuario => {
        console.log(usuario);
        this.listarUsuarios();
      });

    }
  }

}
