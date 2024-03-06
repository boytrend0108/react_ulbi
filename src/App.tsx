import React, { useState } from 'react';
import './styles/App.scss';
import { Post } from './types/post';
import { PostList } from './components/PostList';
import { MyButton } from './components/UI/button/MyButton';
import { MyInput } from './components/UI/input/MyInput';
import { Form } from './components/Form';

const initialPosts: Post[] = [
  { id: 1, title: "Java Script 1", body: 'some text for body 100' },
  { id: 2, title: "Java Script 2 ", body: 'some text for body 200' },
  { id: 3, title: "Java Script 3", body: 'some text for body 300' },
]

function App() {
  const [posts] = useState<Post[]>(initialPosts);

  return (
    <div className="app">
      <Form/>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
