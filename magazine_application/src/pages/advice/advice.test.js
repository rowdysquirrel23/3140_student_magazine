import Advice from './advicePage';
import axios from 'axios';
import { render, fireEvent, waitFor } from '@testing-library/react';

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

describe('Advice component', () => {
  it('submits form data correctly', async () => {
    // Mock response data from axios post request
    const test_data = { name: 'Test Name', comment: 'Test Comment' };
    axios.post.mockResolvedValueOnce({ data: test_data });

    // Mock response data from axios get request
    const get_test_response = { data: { users: [] } };
    axios.get.mockResolvedValueOnce(get_test_response);

    // Render the Advice page
    const { getByLabelText, getByText } = render(<Advice />);

    // Fill out the form inputs for the test
    fireEvent.change(getByLabelText('Name:'), { target: { value: 'Test Name' } });
    fireEvent.change(getByLabelText('Advice:'), { target: { value: 'Test Comment' } });

    // Submit the form
    fireEvent.click(getByText('Submit'));

  });
});