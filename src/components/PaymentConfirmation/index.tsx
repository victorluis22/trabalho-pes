import styles from './paymentConfirmation.module.css';
import Image from 'next/image';

import { formatMoneyBRL } from '@/utils/money';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Paciente from '@/app/api/models/paciente';
import Loading from '../Loading';

interface PaymentConfirmationProps {
  data: Paciente;
}

export default function PaymentConfirmation({
  data,
}: Readonly<PaymentConfirmationProps>) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    console.log('Resposta do sistema: ', data);
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src={'/sucess.gif'}
          alt="Ícone de sucesso"
          width={150}
          height={150}
        />
        <h1 className={styles.title}>Consulta marcada com sucesso</h1>

        <div className={styles.confirmation_container}>
          <div className={styles.confirmation_topic}>
            <h2 className={styles.title}>Paciente</h2>
            <p>
              <b>Nome: </b>
              {data.nome}
            </p>
            <p>
              <b>Email: </b>
              {data.email}
            </p>
            <p>
              <b>Contato: </b>
              {data.contato}
            </p>
          </div>

          <div className={styles.confirmation_topic}>
            <h2 className={styles.title}>Agendamento</h2>

            <p>
              <b>Data: </b>
              {data.consultas.slice(-1)[0].disponibilidade.data}
            </p>
            <p>
              <b>Dia: </b>
              {data.consultas.slice(-1)[0].disponibilidade.horario.dia}
            </p>
            <p>
              <b>Horário: </b>
              {
                data.consultas.slice(-1)[0].disponibilidade.horario.horaIni
              } - {data.consultas.slice(-1)[0].disponibilidade.horario.horaFim}
            </p>
            <p>
              <b>Médico: </b>
              {data.consultas.slice(-1)[0].disponibilidade.medico.nome}
            </p>
          </div>
          <div className={styles.confirmation_topic}>
            <h2 className={styles.title}>Pagamento</h2>

            <p>
              <b>Valor: </b>
              {formatMoneyBRL(data.consultas.slice(-1)[0].pagamento.valor)}
            </p>

            <p>
              <b>Tipo: </b>
              {data.consultas.slice(-1)[0].pagamento.tipoPagam}
            </p>

            <p>
              <b>Data: </b>
              {data.consultas.slice(-1)[0].pagamento.dataPagam}
            </p>

            <p>
              <b>Hora: </b>
              {data.consultas.slice(-1)[0].pagamento.horaPagam}
            </p>
          </div>
        </div>

        <button className={styles.button} onClick={() => router.push('/')}>
          Voltar ao início
        </button>
      </div>
    </div>
  );
}
