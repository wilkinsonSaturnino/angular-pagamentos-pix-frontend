import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../../classes/pessoa';
import { PagamentosService } from '../../services/pagamentos.service';

@Component({
  selector: 'app-pessoa-add',
  templateUrl: './pessoa-add.component.html',
  styleUrls: ['./pessoa-add.component.css']
})
export class PessoaAddComponent implements OnInit {

  pessoa: Pessoa = new Pessoa;

  constructor(private pagamentosService: PagamentosService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.salvarUsuario();
  }

  salvarUsuario() {
    this.pagamentosService.addUsuario(this.pessoa).subscribe(usuario => {
      console.log(usuario);
      this.router.navigate(['/usuarios']);
    },
    error => console.log(error));
  }

  goToUsuarioList(): void {
    this.router.navigate(['/usuarios']);
  }  

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }  

}
