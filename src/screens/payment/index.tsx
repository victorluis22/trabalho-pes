'use client';

import Image from 'next/image';
import styles from './payment.module.css';

import { useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';

export default function PaymentPage() {
  const price = 250.00;

  const pixCode =
    '00020126360014BR.GOV.BCB.PIX0114+55819999999925204000053039865802BR5907Company6009City7008City99945802BR';

  const [chosenPaymentId, setChosenPaymentId] = useState<number | undefined>(0);

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
      dataPagam: now.toLocaleDateString("pt-br"),
      horaPagam: now.toLocaleTimeString("pt-br"),
      tipoPagam: paymentMethods.find((method) => 
        method.id == chosenPaymentId ? method.name : undefined
      )?.name
    };

    console.log('Dados enviados: ', payload);

    const response = await axios.post('/api/routes/consultas', payload);

    console.log(response);
  };

  if (!codDisp) {
    throw PageNotFoundError;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Checkout de Pagamento</h1>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Valor da consulta: {price}</h3>

            <Image
              width={200}
              height={200}
              src="/qrcode.png"
              alt="QR Code de pagamento"
            />

            <div className={styles.code_container}>
              <p>{pixCode}</p>
            </div>

            <button className={styles.copy_button}>Copiar QR Code</button>

            <button className={styles.button} onClick={() => handleSubmit()}>
              Confirmar Pagamento
            </button>
          </div>
          <div className={styles.methods}>
            <h3>Selecione um método de pagamento</h3>

            <div className={styles.method_list}>
              {paymentMethods.map(({ id, image, name }) => {
                return (
                  <button
                    key={id}
                    className={
                      id == chosenPaymentId
                        ? styles.method_card_selected
                        : styles.method_card
                    }
                    onClick={() => setChosenPaymentId(id)}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={image}
                      alt={`Logo ${name}`}
                    />
                    <p>{name}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
