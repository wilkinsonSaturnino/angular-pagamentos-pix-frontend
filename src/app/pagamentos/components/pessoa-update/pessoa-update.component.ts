import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../classes/pessoa';
import { PagamentosService } from '../../services/pagamentos.service';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './pessoa-update.component.html',
  styleUrls: ['./pessoa-update.component.css']
})
export class PessoaUpdateComponent implements OnInit {

  id: number;
  pessoa: Pessoa;

  constructor(private pagamentosService: PagamentosService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pessoa = new Pessoa;
    this.id = this.route.snapshot.params['id'];
    this.pagamentosService.getUsuarioById(this.id)
      .subscribe(usuario => {
      console.log(usuario) 
      this.pessoa = usuario;
    }, error => console.log(error));
  }

  onSubmit() {
    this.atualizarUsuario();
  }

  atualizarUsuario() {
    this.pagamentosService.updateUsuario(this.id, this.pessoa).subscribe(usuario => {
      console.log(usuario);
      this.router.navigate(['/usuarios']);
    },
    error => console.log(error));
  }

  goToUsuarioList(): void {
    this.router.navigate(['/usuarios']);
  }   

}
