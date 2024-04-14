// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, likeBtn, deleteBtn} = props

  const {comment, id, isLike, randomInitialColor, username} = commentDetails
  const isLikeBtn = () => {
    likeBtn(id)
  }

  const isDeleteBtn = () => {
    deleteBtn(id)
  }

  const likeImageUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list">
      <div className="initial-name-container">
        <div className="initial-container">
          <h1 className={`${randomInitialColor} initial`}>
            {username[0].toUpperCase()}
          </h1>
        </div>
        <div className="name-comment-date-container">
          <div className="name-date-container">
            <p className="username">{username}</p>
            <p className="date">{`${commentDetails.newDate.getDate()}/${commentDetails.newDate.getMonth()}/${commentDetails.newDate.getFullYear()}`}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="delete-like-container">
        <img
          onClick={isDeleteBtn}
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
        />
        <img className="like-icon" onClick={isLikeBtn} src={likeImageUrl} />
      </div>
      <hr className="hr" />
    </li>
  )
}

export default CommentItem
