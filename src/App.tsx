import { useState } from 'react';

import './styles/App.scss';
import { Post } from './types/post';
import { PostList } from './components/PostList';
import { Form } from './components/Form';
import { MySelect } from './components/UI/select/MySelect';

const initialPosts: Post[] = [
  { id: 1, title: "Java Script 1", body: 'some text for body 100' },
  { id: 2, title: "Java Script 2 ", body: 'some text for body 200' },
]

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [sortBy, setSortBy] = useState<keyof Post | ''>('')

  function handleOnSubmit(post: Post) {
    setPosts(currentPosts => [...currentPosts, post])
  }

  function removePost(post: Post) {
    setPosts(posts.filter(p => post.id !== p.id));
  }

  function sortPost(value: keyof Post) {
    setSortBy(value);
    
    setPosts([...posts].sort((a, b) => { 
      return a[value].toString().localeCompare(b[value].toString())
    }))
  }

  return (
    <div className="app">
      <Form onSubmit={handleOnSubmit} />

      <h1 className="app__title">Post List</h1>

      <div className="app__select">
        <MySelect
          defaultValue='Sort by'
          options={[
            {name: 'id', value: 'id'},
            {name: 'title', value: 'title'},
          ]}
          value={sortBy}
          select={value => sortPost(value) }
        />
      </div>

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
