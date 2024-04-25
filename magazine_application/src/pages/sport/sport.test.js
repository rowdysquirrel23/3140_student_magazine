import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sport from './sportPage.js';

describe('Sport component', () => {
    test('renders sport articles and society news correctly', () => {
        render(
            <Router>
              <Sport />
            </Router>
          );
      // Check if the sport articles render
      const sport1_article = screen.getByText(/The Edge Clinche The Title!/i);
      expect(sport1_article).toBeInTheDocument();
      const sport2_article = screen.getByText(/Varsity is Coming!/i);
      expect(sport2_article).toBeInTheDocument();
  
      // Check if the society news items render
      const society_header = screen.getByText(/Society News/i);
      expect(society_header).toBeInTheDocument();
      const society_text = screen.getByText(/Wednesday social night at Alpine Night Club/i);
      expect(society_text).toBeInTheDocument();
    });
  });