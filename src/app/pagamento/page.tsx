import Loading from '@/components/Loading';
import PaymentPage from '@/screens/payment';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <PaymentPage />
    </Suspense>
  );
}
