# Router Review:

## Goal

Your goal is to make it so that when you click the comments link on a post, we see a new page (at url "/posts/:id") with the post, a list of its commetns, and a form for adding new comments.

The functionality for adding comments is already built out for you.

The route to the PostView is partially written. You'll have to add some code to it.

## Instructions

1. Navigate the codebase. Summarize what the MainView is doing, and what the PostView is doing.

- MainView Component is rendering a form and list of posts
- PostView component renders an individual Post and the Comment Form

2. What causes the MainView to render?

- Where is this being rendered from?
  from App.js
- What causes the render?
  being at the base url ('/')

3. What happens when you click on a Comment link?

- The url changes to /posts/:idOfThatPost

4. Give 3 examples of urls that would cause the PostView component to render **if the PostViewRoute on App.js line 94 were commented back in**. Why would they trigger a render?

- /posts/1
- /posts/1234236543

5. What data does the PostView component need to take in?

- What props does PostView need
- a post
- changeScore
- addComment

6. Comment the PostView route back in. Clicking on a comment link should cuase an error. What's the error saying?

- post needs a comments property to be mapped over
- how can we find the correct post in state?

7. In the PostView Route (in App.js), console.log the `:id` from the url. The app will still crash if you trigger the route, and that's ok. Just get the id.

8. Thinking about what data the PageView component needs, where the error is coming from, and the id you just console.logged, fix the Route (you have all the tools now!).
