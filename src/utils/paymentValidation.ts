const now = new Date();

export const validatePayment = (type: string | undefined) => {
  switch (type) {
    case 'PIX':
      return validatePIX();
    case 'Cartão':
      return validateCard();
    default:
      return {
        success: false,
        date: null,
        hour: null,
      };
  }
};

export const validatePIX = () => {
  return {
    success: true,
    date: now.toLocaleDateString(),
    hour: now.toLocaleTimeString(),
  };
};

export const validateCard = () => {
  return {
    success: true,
    date: now.toLocaleDateString(),
    hour: now.toLocaleTimeString(),
  };
};
