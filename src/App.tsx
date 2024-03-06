import React, { useState } from 'react';
import './styles/App.scss';
import { Post } from './types/post';
import { PostList } from './components/PostList';
import { Form } from './components/Form';

const initialPosts: Post[] = [
  { id: 1, title: "Java Script 1", body: 'some text for body 100' },
  { id: 2, title: "Java Script 2 ", body: 'some text for body 200' },
]

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  function handleOnSubmit(post: Post) {
    setPosts(currentPosts => [...currentPosts, post])
  }

  return (
    <div className="app">
      <Form onSubmit={handleOnSubmit} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
