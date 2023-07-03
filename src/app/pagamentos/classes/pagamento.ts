import { Pessoa } from "./pessoa";

export class Pagamento {

    id: number;
    chavePix: string;
    valor: number;
    dataPagamento: string;
    descricao: string;
    pessoa: Pessoa;

}
