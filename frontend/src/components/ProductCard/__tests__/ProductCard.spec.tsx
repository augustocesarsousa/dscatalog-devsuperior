import { render, screen } from '@testing-library/react';
import { Product } from 'types/product';
import ProductCard from '..';

test('should render ProductCard', () => {
  const product : Product = {
    name: 'PC gamer',
    price: 1000.00,
    imgUrl: 'url',
  } as Product;

  render(<ProductCard product={product} />);

  expect(screen.getByText(product.name)).toBeInTheDocument();
  expect(screen.getByAltText(product.name)).toBeInTheDocument(); 
  expect(screen.getByText('R$')).toBeInTheDocument(); 
  expect(screen.getByText('1,000.00')).toBeInTheDocument();
});
