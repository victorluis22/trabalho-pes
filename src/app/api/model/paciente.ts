import Consulta from './consulta';
import { v4 as uuid } from 'uuid';
import Disponibilidade from './disponibilidade';
import Pagamento from './pagamento';

class Paciente {
  codPaciente: number;
  nome: string;
  password: string;
  email: string;
  contato: string;
  cep: string;
  cpf: string;
  dataNasc: string;
  numero: number;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;

  consultas: Consulta[];

  constructor(
    codPaciente: number,
    nome: string,
    password: string,
    email: string,
    contato: string,
    cep: string,
    cpf: string,
    dataNasc: string,
    numero: number,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
  ) {
    this.codPaciente = codPaciente;
    this.nome = nome;
    this.password = password;
    this.email = email;
    this.contato = contato;
    this.cep = cep;
    this.cpf = cpf;
    this.dataNasc = dataNasc;
    this.numero = numero;
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;

    this.consultas = [];
  }

  criaConsulta(disponibilidade: Disponibilidade, pagamento: Pagamento) {
    const novaConsulta = new Consulta(disponibilidade, pagamento);

    this.consultas.push(novaConsulta);
  }
}

export default Paciente;
