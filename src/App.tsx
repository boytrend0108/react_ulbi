import { useState } from 'react';

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

  function removePost(post: Post) {
    setPosts(posts.filter(p => post.id !== p.id));
  }

  return (
    <div className="app">
      <Form onSubmit={handleOnSubmit} />

      <h1 className="app__title">Post List</h1>

      {posts.length
        ?
        <PostList posts={posts} remove={removePost} />
        :
        <div className="notification is-primary">
          <strong>There are no posts</strong>
        </div>
      }

    </div>
  );
}

export default App;
