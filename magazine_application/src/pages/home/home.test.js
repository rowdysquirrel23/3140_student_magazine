import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './homePage.js';

describe('Home component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });
//render banner section of the homepage
  it('renders banner section with hero image and text', () => {
    const hero_image = screen.getByAltText('A drone shot of Edge Hill Campus');
    const banner_text = screen.getByText('EDGE EXPRESS');
    expect(hero_image).toBeInTheDocument();
    expect(banner_text).toBeInTheDocument();
  });

});