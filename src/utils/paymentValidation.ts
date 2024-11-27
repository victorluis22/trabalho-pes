export const validatePayment = (type: string | undefined) => {
  const now = new Date();

  switch (type) {
    case 'PIX':
      return validatePIX(now);
    case 'Cartão':
      return validateCard(now);
    default:
      return {
        success: false,
        date: null,
        hour: null,
      };
  }
};

export const validatePIX = (now: Date) => {
  return {
    success: true,
    date: now.toLocaleDateString(),
    hour: now.toLocaleTimeString(),
  };
};

export const validateCard = (now: Date) => {
  return {
    success: true,
    date: now.toLocaleDateString(),
    hour: now.toLocaleTimeString(),
  };
};
