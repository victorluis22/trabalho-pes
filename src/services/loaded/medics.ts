import Medico from '@/app/api/model/medico';

const data = [
  {
    codMedico: 0,
    nome: 'Dra. Sandra',
    email: 'sandra@clinica.com.br',
    senha: '123456',
    contato: '229988778899',
    crm: '2227778890087',
    especialidade: 'Cardiologista',
  },
  {
    codMedico: 1,
    nome: 'Dr. João',
    email: 'joao@clinica.com.br',
    senha: '123456',
    contato: '229988778899',
    crm: '2227778890088',
    especialidade: 'Dermatologista',
  },
  {
    codMedico: 2,
    nome: 'Dr. Carlos',
    email: 'carlos@clinica.com.br',
    senha: '123456',
    contato: '229988778899',
    crm: '2227778890088',
    especialidade: 'Oftalmologista',
  },
  {
    codMedico: 3,
    nome: 'Dr. Ana',
    email: 'ana@clinica.com.br',
    senha: '123456',
    contato: '229988778899',
    crm: '2227778890088',
    especialidade: 'Ginecologista',
  },
];

const loadedMedics: Medico[] = [];

data.map(({ codMedico, nome, email, senha, contato, crm, especialidade }) => {
  loadedMedics.push(
    new Medico(codMedico, nome, email, senha, contato, crm, especialidade)
  );
});

export default loadedMedics;
