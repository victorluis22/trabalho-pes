'use client';

import { useState } from 'react';
import { notFound, useSearchParams } from 'next/navigation';
import { validatePayment } from '@/utils/paymentValidation';

import PaymentConfirmation from '@/components/PaymentConfirmation';
import Paciente from '@/app/api/model/paciente';
import PaymentCheckout from '@/components/PaymentCheckout';

import axios from 'axios';
import loadedDisponibility from '@/services/loaded/disponibility';

export default function PaymentPage() {
  const params = useSearchParams();
  const codDisp = params.get('disponibilidade') ?? undefined;

  if (!codDisp) {
    return notFound();
  }

  const paymentMethods = [
    {
      id: 0,
      name: 'PIX',
      image: '/pix.svg',
    },
    {
      id: 1,
      name: 'Cartão',
      image: '/card.svg',
    },
  ];

  const pixCode =
    '00020126360014BR.GOV.BCB.PIX0114+55819999999925204000053039865802BR5907Company6009City7008City99945802BR';

  const [chosenPaymentId, setChosenPaymentId] = useState<number>(0);
  const [confirmationJSON, setConfirmationJSON] = useState<
    Paciente | undefined
  >();

  const chosenDisponibility = loadedDisponibility.find((disponibility) => {
    if (disponibility.codDisp === parseInt(codDisp)) return disponibility;
  });

  const price = chosenDisponibility?.medico.preco ?? 250.00;

  const criarConsulta = async () => {
    const paymentType = paymentMethods.find((method) =>
      method.id == chosenPaymentId ? method.name : undefined
    )?.name;

    const validation = validatePayment(paymentType);

    console.log(validation)

    if (!validation.success) {
      return alert('Erro ao validar pagamento!');
    }

    const payload = {
      codPaciente: 1,
      codDisp: parseInt(codDisp),
      valor: price,
      dataPagam: validation.date,
      horaPagam: validation.hour,
      tipoPagam: paymentType,
    };

    console.log('Dados enviados: ', payload);

    const response = await axios.post('/api/routes/consultas', payload);

    return setConfirmationJSON(response.data);
  };

  if (confirmationJSON) {
    return <PaymentConfirmation data={confirmationJSON} />;
  }

  return (
    <PaymentCheckout
      price={price}
      pixCode={pixCode}
      chosenPaymentId={chosenPaymentId}
      setChosenPaymentId={setChosenPaymentId}
      handleSubmit={criarConsulta}
      paymentMethods={paymentMethods}
    />
  );
}
