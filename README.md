# Testing Review:

We'll use this repo to practice async testing. This branch is set up to consume [this server](https://github.com/turingschool-examples/post-it-server)

## Set Up Instructions:

1. git clone this repo

1. cd into the repo

1. `git checkout async-testing`

1. run `npm install`

1. run `npm start` to run dev server

1. run `npm test` to start tests

## Code Sand Box:
Or fork the template found [here](https://codesandbox.io/s/github/turingschool-examples/post-it-testing/tree/async-testing)

## Practice Instructions:
We're going to get into some acceptance tests (big integration tests that go over major user stories).

In groups, we'll write tests that cover the following stories:
- As a user, I can view all posts when I load the page
- As a user, I can add a new post to the page
- As a user, I can add a new post to the page and add a comment to that new post 
- As a user, I should NOT be able to add an incomplete post to the page. 

Note that these should all be tested at the `App` component's level (ie, in `App.test.js`).


## Credits: 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

