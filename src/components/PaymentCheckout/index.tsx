import { creditDataProps } from '@/screens/payment';
import CreditCard from '../PaymentMethods/CreditCard';
import Pix from '../PaymentMethods/Pix';
import styles from './paymentCheckout.module.css';
import Image from 'next/image';

import { Dispatch, SetStateAction } from 'react';

interface PaymentMethodsProps {
  id: number;
  name: string;
  image: string;
}

interface PaymentCheckoutProps {
  price: number;
  pixCode: string;
  paymentMethods: PaymentMethodsProps[];
  chosenPaymentId: number | undefined;
  setChosenPaymentId: (id: number) => void;
  handleSubmit: () => void;
  creditData: creditDataProps;
  changeCreditData: Dispatch<SetStateAction<creditDataProps>>;
}

export default function PaymentCheckout({
  price,
  pixCode,
  paymentMethods,
  chosenPaymentId,
  setChosenPaymentId,
  handleSubmit,
  creditData,
  changeCreditData,
}: Readonly<PaymentCheckoutProps>) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Checkout de Pagamento</h1>

        <div className={styles.content}>
          <div className={styles.info}>
            {chosenPaymentId === 0 ? (
              <Pix
                price={price}
                pixCode={pixCode}
                handleSubmit={handleSubmit}
              />
            ) : (
              false
            )}
            {chosenPaymentId === 1 ? (
              <CreditCard
                price={price}
                creditData={creditData}
                changeCreditData={changeCreditData}
                handleSubmit={handleSubmit}
              />
            ) : (
              false
            )}
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
