import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import history from 'util/history';
import Form from '../Form';

test('should render Form', () => {
  render(
    <Router history={history}>
      <Form />
    </Router>
  );

  screen.debug();
  //expect(screen.getByText(text)).toBeInTheDocument();
});
