import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe( 'App',  () => {
  it('should be able to fill out and submit the post form, and add a post to the page', () => {
    const { getByText, getByRole, getByPlaceholderText } = render(
      <BrowserRouter>
        <App />
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

    const newTitle = getByRole('heading', {name: 'Mock Idea'});
    const newAuthor = getByRole('heading', {name: 'by John Doe'});
    const newContent = getByText('The quick brown', {exact: false});

    expect(newTitle).toBeInTheDocument();
    expect(newAuthor).toBeInTheDocument();
    expect(newContent).toBeInTheDocument();
  
  });

  it.skip('should be able to add a new post, then add a comment to that post', () => {
    const { getByText, getByRole, getByPlaceholderText, getAllByAltText } = render(
      <BrowserRouter>
        <App />
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

    const commentLink = getByRole('link', {name: '0 comment(s)'});

    fireEvent.click(commentLink);

    const addCommentInput = getByRole('textbox');
    const addCommentButton = getByRole('button', {name: 'Add Comment'});

    fireEvent.change(addCommentInput, {target: {value: 'Test Comment'}});
    fireEvent.click(addCommentButton);

    const newComment = getByText('Test Comment');
    
    expect(newComment).toBeInTheDocument();
  });

  it('should be able to load all posts, then add a comment to an existing post', () => {
    const { getByText, getByRole, getByPlaceholderText, getAllByAltText, debug } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    

    const commentLink = getByRole('link', {name: '2 comment(s)'});

    debug();
    fireEvent.click(commentLink);

    const addCommentInput = getByRole('textbox');
    const addCommentButton = getByRole('button', {name: 'Add Comment'});

    fireEvent.change(addCommentInput, {target: {value: 'Test Comment'}});
    fireEvent.click(addCommentButton);

    const newComment = getByText('Test Comment');
    
    expect(newComment).toBeInTheDocument();
  
  });

});
