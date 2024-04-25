import React from 'react';
import { render, screen } from '@testing-library/react';
import Activities from './activitiesPage.js';

describe('Activities component', () => {
    it('renders each pub card with image, number, and name', () => {
      render(<Activities />);
      const pub_cards = screen.getAllByRole('article');
      // Check if each pub card contains an image number and name
      pub_cards.forEach((card) => {
        const pub_image = card.querySelector('.pub_img');
        const pub_number = card.querySelector('.pub_number');
        const pub_name = card.querySelector('.pub_name');
        
        expect(pub_image).toBeInTheDocument();
        expect(pub_number).toBeInTheDocument();
        expect(pub_name).toBeInTheDocument();
      });
  
      // Check if the correct number of pub cards is rendered on screen
      expect(pub_cards).toHaveLength(9); 
    });
  });