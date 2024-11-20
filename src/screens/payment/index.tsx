'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';

import axios from 'axios';
import PaymentConfirmation from '@/components/PaymentConfirmation';
import Paciente from '@/app/api/model/paciente';
import PaymentCheckout from '@/components/PaymentCheckout';

export default function PaymentPage() {
  const price = 250.0;

  const pixCode =
    '00020126360014BR.GOV.BCB.PIX0114+55819999999925204000053039865802BR5907Company6009City7008City99945802BR';

  const [chosenPaymentId, setChosenPaymentId] = useState<number | undefined>(0);
  const [confirmationJSON, setConfirmationJSON] = useState<
    Paciente | undefined
  >();

  const params = useSearchParams();
  const codDisp = params.get('disponibilidade') ?? '';

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
    {
      id: 2,
      name: 'Boleto',
      image: '/bill.svg',
    },
  ];

  const handleSubmit = async () => {
    const now = new Date();

    const payload = {
      codPaciente: 1,
      codDisp: parseInt(codDisp),
      valor: price,
      dataPagam: now.toLocaleDateString(),
      horaPagam: now.toLocaleTimeString(),
      tipoPagam: paymentMethods.find((method) =>
        method.id == chosenPaymentId ? method.name : undefined
      )?.name,
    };

    console.log('Dados enviados: ', payload);

    const response = await axios.post('/api/routes/consultas', payload);

    return setConfirmationJSON(response.data);
  };

  if (!codDisp) {
    throw PageNotFoundError;
  }

  if (confirmationJSON) {
    return <PaymentConfirmation data={confirmationJSON} />;
  }

  return (
    <PaymentCheckout
      price={price}
      pixCode={pixCode}
      chosenPaymentId={chosenPaymentId}
      setChosenPaymentId={setChosenPaymentId}
      handleSubmit={handleSubmit}
      paymentMethods={paymentMethods}
    />
  );
}
