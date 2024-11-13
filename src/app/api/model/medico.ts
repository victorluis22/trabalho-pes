import Especialidade from './especialidade';

class Medico {
  codMedico: number;
  nome: string;
  email: string;
  senha: string;
  contato: string;
  crm: string;
  especialidade: string; // Ver depois isso aqui para virar classe kkk

  constructor(
    codMedico: number,
    nome: string,
    email: string,
    senha: string,
    contato: string,
    crm: string,
    especialidade: string
  ) {
    this.codMedico = codMedico;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.contato = contato;
    this.crm = crm;
    this.especialidade = especialidade;
  }
}

export default Medico;
