import { Pessoa } from "./pessoa";

export class Pagamento {

    id: number;
    nomeDestinatario: string;
    cpf: string;
    chavePix: string;
    valor: number;
    dataPagamento: string;
    descricao: string;
    pessoa: Pessoa;

}
