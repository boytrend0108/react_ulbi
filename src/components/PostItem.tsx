import '../styles/PostItem.scss';

export const PostItem = () => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>1.Java Script</strong>
        <div> JS  - is a codding language</div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  )
}