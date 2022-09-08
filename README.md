# Phase 3 React-Frontend: Construction Blog App

Project name: Construction Blog App
Author: Elijah Bundi

## Links
Below are the github links for the frontend and backend.
``
frontend link
``
https://four-gables-app.herokuapp.com/
``
backend link
``
https://powerful-gorge-80946.herokuapp.com/houseData

## Introduction
Welcome to construction blog App, where dreams come home! We encourage you to search, read, explore, review and let us guide you home. Our layout is extremely user friendly, offering a beautiful interface as the blogs we offer. Our mantra being the magnitude of the minute, we showcase simplicity in its most grandiose form. 


## Setup

After unbundling the project:

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `8004`.
3. In a new terminal, run `npm start`. This will run your React app on port `8000`.

Make sure to open [http://localhost:9292/blogs](http://localhost:9292/blogs) in the browser to verify that your backend is working before you proceed!

The base URL for your backend is: `http://localhost:9292`

## Core Deliverables

As a user:
1. When the app starts, I can see all currently uploaded blogs.
2. I can add a new blog to the list of blogs while sending that data back to the server.
3. I can delete blogs and add blogs at will.
4. I can review and update blogs.

### Endpoints for Core Deliverables

#### GET /blogs
Example Response:
```json
[
  {
      "id": 2,
      "title": "Baraza",
      "author_id": "barazaokwetu@gmail.com",
      "content": "Get woken up by the cool breeze of the ocean."
    },
    {
      "id": 3,
      "title": "Esther",
      "author_id": "estherhoyt@gmail.com",
      "content": "Beautiful waterfall scenery."
    },
]
```
#### POST `/blogs`
Required Headers:
```js
{
  "Content-Type": "application/json"
}
```
Request Object:
```json
{
  "title": "Billy",
  "author_id": "Omollo",
  "content": "When you want a town setting."
},   
```
Example Response:
```json
{
  "title": "Billy",
  "author_id": "Omollo",
  "content": "When you want a town setting."
},
```
#### DELETE `/blogs/:id`
```
Using a button, function and the filter method, a blog can be deleted and the remaining blogs displayed.
Example Response:
```json
{}
```
#### Advanced Deliverables
```
As a user:
1. I can add a blog to my favorites and see it on a separate list.
2. I can click on a blog and see it on a separate page with more detailed content.
```