import { screen, render, fireEvent } from '@testing-library/react';
import { useTheme } from 'next-themes';
import { ButtonToggleTheme } from '.';

jest.mock('next-themes');

const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;

const setThemeMock = jest.fn();

describe('<ButtonToggleTheme />', () => {
  it('should be able to toggle from light to dark', () => {
    mockUseTheme.mockImplementation(() => ({
      theme: 'light',
      setTheme: setThemeMock,
      themes: [],
    }));

    render(<ButtonToggleTheme />);

    fireEvent.click(screen.getByText(/claro/i));

    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });

  it('should be able to toggle from dark to light', () => {
    mockUseTheme.mockImplementation(() => ({
      theme: 'dark',
      setTheme: setThemeMock,
      themes: [],
    }));

    render(<ButtonToggleTheme />);

    fireEvent.click(screen.getByText(/escuro/i));

    expect(setThemeMock).toHaveBeenCalledWith('light');
  });
});
