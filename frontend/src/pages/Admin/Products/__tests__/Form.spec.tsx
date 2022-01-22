import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router, useParams } from 'react-router-dom';
import selectEvent from 'react-select-event';
import history from 'util/history';
import Form from '../Form';
import { server } from './fixtures';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

  test('should render Form', async () => {
    render(
      <Router history={history}>
        <Form />
      </Router>
    );

    const nameInput = screen.getByTestId("name");
    const priceInput = screen.getByTestId("price");
    const imgUrlInput = screen.getByTestId("imgUrl");
    const descriptionInput = screen.getByTestId("description");
    const categoriesInput = screen.getByLabelText("Categorias");
    const submitButton = screen.getByRole('button', { name: /salvar/i})

    await selectEvent.select(categoriesInput, ['Computadores', 'Eletrônicos'])
    
    userEvent.type(nameInput, 'Computador');
    userEvent.type(priceInput, '5000.12');
    userEvent.type(imgUrlInput, 'https://i.kym-cdn.com/entries/icons/facebook/000/019/649/OK_thumb.jpg');
    userEvent.type(descriptionInput, 'Computador i7, 8GB ram, 512 SSD');

    userEvent.click(submitButton);
  });
});
