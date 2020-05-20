import React from 'react';
import Form from './Form';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Form', () => {
  it('should be able to fill out an input', () => {


  });

  it('should be able to add a new post on submit (think about mocks...)', () => {
    const mockAddPost = jest.fn();
    const { getByText, getByRole, getByPlaceholderText, debug } = render(
      <BrowserRouter>
        <Form addPost={mockAddPost}/>
      </BrowserRouter>
    );
    
    const titleInput = getByPlaceholderText('title');
    const authorInput = getByPlaceholderText('author');
    const contentInput = getByPlaceholderText('content');
    const addPostBtn = getByText('Add Post');

    fireEvent.change(titleInput, {target: {value: 'Mock Idea'}})
    fireEvent.change(authorInput, {target: {value: 'John Doe'}})
    fireEvent.change(contentInput, {target:{value: 'The quick brown fox jumped over the small dog.'}})
    fireEvent.click(addPostBtn);

    //debug();

    expect(mockAddPost).toHaveBeenCalledTimes(1);
  
  });

  it('should not be able to add a new post with any empty inputs', () => {
  
  });
});
