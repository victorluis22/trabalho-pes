import Consulta from './consulta';
import Disponibilidade from './disponibilidade';

class Paciente {
  codPaciente: number;
  nome: string;
  senha: string;
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
    senha: string,
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
    this.senha = senha;
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

  criaConsulta(
    disponibilidade: Disponibilidade,
    valor: number,
    dataPagam: string,
    horaPagam: string,
    tipoPagam: string
  ) {
    const novaConsulta = new Consulta(
      disponibilidade,
      valor,
      dataPagam,
      horaPagam,
      tipoPagam
    );

    disponibilidade.reservaDisponibilidade();

    this.consultas.push(novaConsulta);
  }
}

export default Paciente;
