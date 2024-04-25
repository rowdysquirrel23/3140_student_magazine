import React from 'react';
import { render, screen } from '@testing-library/react';
import Campus from './campusPage.js';

describe('Campus component', () => {
  it('renders campus header', () => {
    render(<Campus />);
    const headerElement = screen.getByText(/Campus News!/i);
    expect(headerElement).toBeInTheDocument();
  });

//   it('renders all stories with titles, images, and text', () => {
//     render(<Campus />);
//     const storyTitles = screen.getAllByRole('heading', { level: 2 });
//     const storyImages = screen.getAllByRole('img');
//     const storyTexts = screen.getAllByRole('paragraph');

//     // Check if all stories have titles, images, and text
//     expect(storyTitles).toHaveLength(6);
//     expect(storyImages).toHaveLength(6);
//     expect(storyTexts).toHaveLength(6);
//   });
});