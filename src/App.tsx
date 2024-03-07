import { useMemo, useState } from 'react';

import './styles/App.scss';
import { Post } from './types/post';
import { PostList } from './components/PostList';
import { Form } from './components/Form';
import { PostFilter } from './components/PostFilter';
import { Filters } from './types/filter';
import { MyModal } from './components/UI/modal/MyModal';
import { MyButton } from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePost';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState<Filters>({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

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
