import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagamento } from '../classes/pagamento';
import { Pessoa } from '../classes/pessoa';
import { Conta } from '../classes/conta';

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  private URL_USUARIO = 'http://localhost:8082/api/v1/usuarios';
  private URL_USUARIO_POR_NOME = 'http://localhost:8082/api/v1/usuarios/por-nome';
  private URL_PAGAMENTOS = 'http://localhost:8082/api/v1/pagamentos';
  private URL_PAGAMENTOS_POR_USUARIO = 'http://localhost:8082/api/v1/pagamentos/por-usuario';
  private URL_CONTAS = 'http://localhost:8082/api/v1/contas';
  private URL_CONTAS_POR_USUARIO = 'http://localhost:8082/api/v1/contas/por-usuario';  
  private URL_MONTANTE_MAIOR_MENOR_ANO = 'http://localhost:8082/api/v1/montante/maior-menor-ano';

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

  /* CRUD CONTAS */
  getContaList(): Observable<Conta[]> {
    return this.httpClient.get<Conta[]>(this.URL_CONTAS);
  }

  getContaById(id: number): Observable<Conta> {
    return this.httpClient.get<Conta>(`${this.URL_CONTAS}/${id}`);
  }

  getContasByUsuario(idUsuario: number): Observable<Conta[]> {
    return this.httpClient.get<Conta[]>(`${this.URL_CONTAS_POR_USUARIO}/${idUsuario}`);
  }

  addConta(idUsuario: number, conta: Conta): Observable<Object> {
    return this.httpClient.post(`${this.URL_CONTAS}/${idUsuario}`, conta);
  }

  updateConta(idConta: number, idUsuario: number, conta: Conta): Observable<Object> {
    return this.httpClient.put(`${this.URL_CONTAS}/${idConta}/${idUsuario}`, conta);
  }

  deleteConta(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.URL_CONTAS}/${id}`);
  }  

  /* CRUD PAGAMENTOS */
  getPagamentosList(): Observable<Pagamento[]> {
    return this.httpClient.get<Pagamento[]>(this.URL_PAGAMENTOS);
  }

  getPagamentoById(id: number): Observable<Pagamento> {
    return this.httpClient.get<Pagamento>(`${this.URL_PAGAMENTOS}/${id}`);
  }

  getPagamentosByUsuario(idUsuario: number): Observable<Pagamento[]> {
    return this.httpClient.get<Pagamento[]>(`${this.URL_PAGAMENTOS_POR_USUARIO}/${idUsuario}`);
  }

  addPagamento(idUsuario: number, pagamento: Pagamento): Observable<Object> {
    return this.httpClient.post(`${this.URL_PAGAMENTOS}/${idUsuario}`, pagamento);
  }

  updatePagamento(idPagamento: number, idUsuario: number, pagamento: Pagamento): Observable<Object> {
    return this.httpClient.put(`${this.URL_PAGAMENTOS}/${idPagamento}/${idUsuario}`, pagamento);
  }

  deletePagamento(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.URL_PAGAMENTOS}/${id}`);
  }  

  /* OPERAÇÕES MONTANTE */

  getMaiorMenorAnoUsuario(idUsuario: number): Observable<number[]> {
    return this.httpClient.get<number[]>(`${this.URL_MONTANTE_MAIOR_MENOR_ANO}/${idUsuario}`);
  }

}
