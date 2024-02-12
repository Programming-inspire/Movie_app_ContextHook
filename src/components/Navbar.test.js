import React from 'react';
import {getByText, render,fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';



describe('Navbar component', () => {
    test('renders without crashing', () => {
        render(
        <MemoryRouter>
        <Navbar/>
        </MemoryRouter>);
    });

    test('renders logo with correct text', () => {
        const {getByText} = render(
            <MemoryRouter>
        <Navbar/>
        </MemoryRouter>
        );
        const logoElement = getByText(/Movie Hub/i);
        expect(logoElement).toBeInTheDocument();
    });

    test('renders search input', () => {
        const { getByPlaceholderText } = render(
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        );
        const searchInput = getByPlaceholderText(/Search for movies or TV shows/i);
        expect(searchInput).toBeInTheDocument();
      });

      test.only('executes search handler when typing into search input', () => {
        const mockOnSearch = jest.fn();
        const { getByPlaceholderText } = render(
          <MemoryRouter>
            <Navbar onSearch={mockOnSearch} />
          </MemoryRouter>
        );
        const searchInput = getByPlaceholderText(/Search for movies or TV shows/i);
        fireEvent.change(searchInput, { target: { value: 'test' } });
        expect(mockOnSearch).toHaveBeenCalledWith('test');
      });
    
      test('renders navigation links', () => {
        const { getByText } = render(
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        );
        const moviesLink = getByText(/Movies/i);
        const tvShowsLink = getByText(/TV Shows/i);
        expect(moviesLink).toBeInTheDocument();
        expect(tvShowsLink).toBeInTheDocument();
      });
});


