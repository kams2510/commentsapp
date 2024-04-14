import './index.css'
import {Component} from 'react'
import {v4 as uiudv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
// Write your code here

class Comments extends Component {
  state = {
    commentList: [],
    id: '',
    username: '',
    comment: '',
    isLike: false,
    randomInitialColor: '',
    newDate: '',
  }

  submitComment = event => {
    event.preventDefault()
    const {username, comment} = this.state
    const randomInitialColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newDate = new Date()
    console.log(randomInitialColor)
    const newComment = {
      id: uiudv4(),
      username,
      comment,
      isLike: false,
      randomInitialColor,
      newDate,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      username: '',
      comment: '',
    }))
  }

  readComment = e => {
    this.setState({comment: e.target.value})
  }

  readUsername = e => {
    this.setState({username: e.target.value})
  }

  likeBtn = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  deleteBtn = id => {
    const {commentList} = this.state
    const afterDeleteCommentList = commentList.filter(each => each.id !== id)
    this.setState({commentList: afterDeleteCommentList})
  }

  render() {
    const {username, comment, commentList} = this.state
    console.log(commentList)
    return (
      <div>
        <form className="container" onSubmit={this.submitComment}>
          <div className="comment-card">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <input
              value={username}
              onChange={this.readUsername}
              placeholder="Your Name"
            />
            <textarea
              value={comment}
              name="postContent"
              rows={4}
              cols={40}
              onChange={this.readComment}
              placeholder="Your Comment"
            />
            <button type="submit" className="submit-btn">
              Add Comment
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comment-logo"
              alt="comment logo"
            />
          </div>
        </form>
        <hr />
        <div className="comment-count-card">
          <p>{commentList.length}</p>
          <p>Comments</p>
        </div>
        <ul>
          {commentList.map(each => (
            <CommentItem
              commentDetails={each}
              key={each.id}
              likeBtn={this.likeBtn}
              deleteBtn={this.deleteBtn}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
