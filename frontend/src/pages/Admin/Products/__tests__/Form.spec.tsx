import { render, screen } from '@testing-library/react';
import { Router, useParams } from 'react-router-dom';
import history from 'util/history';
import Form from '../Form';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('product form create tests', () => {
    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({
            productId: 'create'
        })
    })

  test('should render Form', () => {
    render(
      <Router history={history}>
        <Form />
      </Router>
    );

    const nameImput = screen.getByTestId("name");
    const categoriesImput = screen.getByLabelText("Categorias");
    const priceImput = screen.getByTestId("price");
    const imgUrlImput = screen.getByTestId("imgUrl");
    const descriptionImput = screen.getByTestId("description");

  });
});
