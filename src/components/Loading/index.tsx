import Image from 'next/image';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src={'/loading.gif'}
          alt="Ícone de loading"
          width={60}
          height={60}
        />
      </div>
    </div>
  );
}
