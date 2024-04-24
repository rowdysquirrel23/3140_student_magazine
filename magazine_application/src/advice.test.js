import Advice from './pages/advice/advicePage';
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

    // Render the Advice component
    const { getByLabelText, getByText, getAllByText } = render(<Advice />);

    // Fill out the form inputs
    fireEvent.change(getByLabelText('Name:'), { target: { value: 'Test Name' } });
    fireEvent.change(getByLabelText('Advice:'), { target: { value: 'Test Comment' } });

    // Submit the form
    fireEvent.click(getByText('Submit'));

    // Wait for the axios post request to be called
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    // Check if the submitted data is displayed
    await waitFor(() => {
      expect(getAllByText('Name:')).toHaveLength(2); // Check for two elements
      expect(getByText('Name:').textContent.trim()).toEqual('Name: Test Name');
      expect(getByText('Advice:')).toBeInTheDocument();
      expect(getByText('Advice:').textContent.trim()).toEqual('Advice: Test Comment');
    });
  });
});