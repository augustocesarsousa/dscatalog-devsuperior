import { render, screen } from '@testing-library/react';
import ButtoIcon from '..';

test('Buttonicon should render button with given text', () => {
  const text = 'Botão';

  render(<ButtoIcon text={text} />);

  expect(screen.getByText(text)).toBeInTheDocument();
  expect(screen.getByTestId("arrow")).toBeInTheDocument();
});
