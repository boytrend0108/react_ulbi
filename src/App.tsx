import { useMemo, useState } from 'react';

import './styles/App.scss';
import { Post } from './types/post';
import { PostList } from './components/PostList';
import { Form } from './components/Form';
import { PostFilter } from './components/PostFilter';
import { Filters } from './types/filter';
import { MyModal } from './components/UI/modal/MyModal';
import { MyButton } from './components/UI/button/MyButton';

const initialPosts: Post[] = [
  { id: 1, title: "Java Script 1", body: 'some text for body 100' },
  { id: 2, title: "Java Script 2 ", body: 'some text for body 200' },
]

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [filter, setFilter] = useState<Filters>({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    const { sort } = filter;

    if (sort !== '') {
      return [...posts].sort((a, b) => {
        return a[sort].toString().localeCompare(b[sort].toString())
      })
    }

    return posts;
  }, [posts, filter.sort]);

  const sortedAndSearchedPosts = useMemo(() => {
    const { query } = filter;
    return sortedPosts.filter(post => {
      return post.title.toLowerCase().includes(query.toLowerCase())
    })
  }, [filter.query, sortedPosts])

  function handleOnSubmit(post: Post) {
    setPosts(currentPosts => [...currentPosts, post])
    setModal(false);
  }

  function removePost(post: Post) {
    setPosts(posts.filter(p => post.id !== p.id));
  }


  return (
    <div className="app">
      <MyModal visible={modal} setVisible={setModal}>
        <Form onSubmit={handleOnSubmit} />
      </MyModal>

      <MyButton onClick={() => setModal(true)}>Create post</MyButton>

      <h1 className="app__title">Post List</h1>

      <PostFilter setFilter={setFilter} filter={filter} />

      <PostList posts={sortedAndSearchedPosts} remove={removePost} />
    </div>
  );
}

export default App;
