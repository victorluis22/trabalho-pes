import Especialidade from '@/app/api/models/especialidade';

const data = [
  {
    codEspecialidade: 0,
    nome: 'Cardiologista',
  },
  {
    codEspecialidade: 1,
    nome: 'Ginecologista',
  },
  {
    codEspecialidade: 2,
    nome: 'Oftalmologista',
  },
  {
    codEspecialidade: 3,
    nome: 'Dermatologista',
  },
];

const loadedEspecialties: Especialidade[] = [];

data.map(({ codEspecialidade, nome }) => {
  loadedEspecialties.push(new Especialidade(codEspecialidade, nome));
});

export default loadedEspecialties;
