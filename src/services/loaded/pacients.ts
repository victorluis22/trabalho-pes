import Paciente from '@/app/api/models/paciente';

const data = [
  {
    codPaciente: 1,
    nome: 'Victor Luis Teixeira Reis',
    senha: '123456',
    email: 'victorluis2002@gmail.com',
    contato: '22998779458',
    cep: '28523400',
    cpf: '00000000098',
    dataNasc: '05/12/2002',
    numero: 285,
    rua: 'R. Vicente Sobrinho',
    bairro: 'Olaria',
    cidade: 'Nova Friburgo',
    estado: 'Rio de Janeiro',
  },
];

const loadedPacients: Paciente[] = [];

data.map(
  ({
    codPaciente,
    nome,
    senha,
    email,
    contato,
    cep,
    cpf,
    dataNasc,
    numero,
    rua,
    bairro,
    cidade,
    estado,
  }) => {
    loadedPacients.push(
      new Paciente(
        codPaciente,
        nome,
        senha,
        email,
        contato,
        cep,
        cpf,
        dataNasc,
        numero,
        rua,
        bairro,
        cidade,
        estado
      )
    );
  }
);

export default loadedPacients;
