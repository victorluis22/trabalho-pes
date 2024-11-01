import Consulta from "./consulta";
import { v4 as uuid } from "uuid";

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
    this.codPaciente = 1;
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
}

export default Paciente;
