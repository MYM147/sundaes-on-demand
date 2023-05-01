import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

test("initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', {name: /confirm order/i});
  expect(confirmButton).toBeDisabled();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<SummaryForm />)
  const checkbox = screen.getByRole('checkbox');
  const confirmButton = screen.getByRole('button', {name: /confirm order/i});

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});