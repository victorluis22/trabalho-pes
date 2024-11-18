'use client'

import { useSearchParams } from 'next/navigation';
import styles from './confirmation.module.css';

export default function ConfirmationPage() {
  const params = useSearchParams();

  const confirmationData = params.get('data');

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Consulta Marcada</h1>

        <div>
          {confirmationData}
        </div>
      </div>
    </div>
  );
}
