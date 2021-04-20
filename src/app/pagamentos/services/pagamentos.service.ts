import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagamento } from '../classes/pagamento';
import { Pessoa } from '../classes/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  private URL_USUARIO = 'http://localhost:8082/api/v1/usuarios';
  private URL_USUARIO_POR_NOME = 'http://localhost:8082/api/v1/usuarios/por-nome';
  private URL_PAGAMENTO = 'http://localhost:8082/api/v1/pagamentos';
  private URL_PAGAMENTO_POR_USUARIO = 'http://localhost:8082/api/v1/pagamentos/por-usuario';

  constructor(private httpClient: HttpClient) { }

  /* CRUD USUÁRIOS */
  getUsuariosList(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(this.URL_USUARIO);
  }

  getUsuarioByNome(nome: string): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(`${this.URL_USUARIO_POR_NOME}/${nome}`);
  }

  addUsuario(pessoa: Pessoa): Observable<Object> {
    return this.httpClient.post(this.URL_USUARIO, pessoa);
  }

  getUsuarioById(id: number): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(`${this.URL_USUARIO}/${id}`);
  }

  updateUsuario(id: number, pessoa: Pessoa): Observable<Object> {
    return this.httpClient.put(`${this.URL_USUARIO}/${id}`, pessoa);
  }

  deleteUsuario(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.URL_USUARIO}/${id}`);
  }

  /* CRUD PAGAMENTOS */
  getPagamentosList(): Observable<Pagamento[]> {
    return this.httpClient.get<Pagamento[]>(this.URL_PAGAMENTO);
  }

  getPagamentoById(id: number): Observable<Pagamento> {
    return this.httpClient.get<Pagamento>(`${this.URL_PAGAMENTO}/${id}`);
  }

  getPagamentosByUsuario(idUsuario: number): Observable<Pagamento[]> {
    return this.httpClient.get<Pagamento[]>(`${this.URL_PAGAMENTO_POR_USUARIO}/${idUsuario}`);
  }

  addPagamento(idUsuario: number, pagamento: Pagamento): Observable<Object> {
    return this.httpClient.post(`${this.URL_PAGAMENTO}/${idUsuario}`, pagamento);
  }

  updatePagamento(idPagamento: number, idUsuario: number, pagamento: Pagamento): Observable<Object> {
    return this.httpClient.put(`${this.URL_PAGAMENTO}/${idPagamento}/${idUsuario}`, pagamento);
  }

  deletePagamento(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.URL_PAGAMENTO}/${id}`);
  }  

}
