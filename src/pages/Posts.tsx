import { useEffect, useState } from 'react';

import '../styles/App.scss';
import PostService from '../api/PostServise';
import { Form } from '../components/Form';
import { PostList } from '../components/PostList';
import { PostFilter } from '../components/PostFilter';
import { MyModal } from '../components/UI/modal/MyModal';
import { MyButton } from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePost';
import { Post } from '../types/post';
import { Filters } from '../types/filter';
import { MyLoader } from '../components/UI/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import { MyPagination } from '../components/UI/pagination/MyPagination';

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState<Filters>({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPost, isLoading, error]
    = useFetching(async (limit:number, page: number) => {
    const response = await PostService.getAll(limit, page);

    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPage(getPageCount(totalCount, limit));
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPost(limit, page);
  }, []);

  function changePage(page: number) {
    setPage(page);
    fetchPost(limit, page)
  }

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

      {error && (
        <h2>{error}</h2>
      )}

      {isLoading && (
        <div className='app__loader'>
          <MyLoader />
        </div>
      )}

      {!isLoading && !error && (
        <PostList posts={sortedAndSearchedPosts} remove={removePost} />
      )}

      <MyPagination totalPage={totalPage} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
