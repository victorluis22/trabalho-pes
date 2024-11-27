import { creditDataProps } from "@/screens/payment";

export const validatePayment = (type: string | undefined, pixCode: string, creditData: creditDataProps) => {
  const now = new Date();

  switch (type) {
    case 'PIX':
      return validatePIX(now, pixCode);
    case 'Cartão':
      return validateCard(now, creditData);
    default:
      return {
        sucess: false,
        message: "Erro ao validar pagamento",
        date: null,
        hour: null,
      };
  }
};

export const validatePIX = (now: Date, pixCode: string) => {
  return {
    sucess: true,
    message: "Sucesso ao validar pagamento Pix",
    date: now.toLocaleDateString(),
    hour: now.toLocaleTimeString(),
  };
};

export const validateCard = (now: Date, creditData: creditDataProps) => {
  if (Object.keys(creditData).some(key => creditData[key as keyof creditDataProps] === '')) {
    return {
      sucess: false,
      message: "Preencha todas as informações do cartão de crédito",
      date: null,
      hour: null,
    };
  }

  return {
    sucess: true,
    message: "Sucesso ao validar pagamento com cartão",
    date: now.toLocaleDateString(),
    hour: now.toLocaleTimeString(),
  };
};
