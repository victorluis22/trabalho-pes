import Especialidade from './especialidade';

class Medico {
  codMedico: number;
  nome: string;
  email: string;
  senha: string;
  contato: string;
  crm: string;
  especialidade: Especialidade;
  preco: number;

  constructor(
    codMedico: number,
    nome: string,
    email: string,
    senha: string,
    contato: string,
    crm: string,
    especialidade: Especialidade,
    preco: number
  ) {
    this.codMedico = codMedico;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.contato = contato;
    this.crm = crm;
    this.especialidade = especialidade;
    this.preco = preco;
  }
}

export default Medico;
