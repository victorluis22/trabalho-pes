import Medico from '@/app/api/models/medico';
import loadedEspecialties from './especialties';

const data = [
  {
    codMedico: 0,
    nome: 'Dra. Sandra',
    email: 'sandra@clinica.com.br',
    senha: '123456',
    contato: '229988778899',
    crm: '2227778890087',
    especialidade: loadedEspecialties[0],
    preco: 400.0,
  },
  {
    codMedico: 1,
    nome: 'Dr. João',
    email: 'joao@clinica.com.br',
    senha: '123456',
    contato: '229988778899',
    crm: '2227778890088',
    especialidade: loadedEspecialties[3],
    preco: 250.0,
  },
  {
    codMedico: 2,
    nome: 'Dr. Carlos',
    email: 'carlos@clinica.com.br',
    senha: '123456',
    contato: '229988778899',
    crm: '2227778890088',
    especialidade: loadedEspecialties[2],
    preco: 250.0,
  },
  {
    codMedico: 3,
    nome: 'Dr. Ana',
    email: 'ana@clinica.com.br',
    senha: '123456',
    contato: '229988778899',
    crm: '2227778890088',
    especialidade: loadedEspecialties[1],
    preco: 100.0,
  },
];

const loadedMedics: Medico[] = [];

data.map(
  ({ codMedico, nome, email, senha, contato, crm, especialidade, preco }) => {
    loadedMedics.push(
      new Medico(
        codMedico,
        nome,
        email,
        senha,
        contato,
        crm,
        especialidade,
        preco
      )
    );
  }
);

export default loadedMedics;
