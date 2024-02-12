import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

describe('Home', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('renders users when API call succeeds', async () => {
    const Movies = [
      { id: 1, original_title: "The Beekeeper" },
      { id: 2, original_title: "I.S.S." },
    ];
    const Genres = [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Comedy' },
    ];

    fetchMock.mockResolvedValueOnce({ status: 200, json: jest.fn(() => Movies) })
          .mockResolvedValueOnce({ status: 200, json: jest.fn(() => Genres) });


    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    
   console.log(screen.debug());


    expect(await screen.getByText('The Beekeeper')).toBeInTheDocument();
    expect(await screen.findByText('I.S.S.')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument(); 
    expect(screen.getByText('Comedy')).toBeInTheDocument(); 
  });
});
