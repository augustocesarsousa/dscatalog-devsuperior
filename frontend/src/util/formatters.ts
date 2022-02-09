export const formatPrice = (price: number) => {
  const params = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
  return new Intl.NumberFormat('pt-BR', params).format(price);
};

export const formatRole = (role: string) => {
  switch (role) {
    case 'ROLE_ADMIN':
      return 'Administrador';

    case 'ROLE_OPERATOR':
      return 'Operador';

    default:
      return '';
  }
};
