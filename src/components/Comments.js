import React from 'react';
import { useParams } from 'react-router-dom';
import NewCommentForm from './NewCommentForm';

function Comments({ superheros }) {
  const {superhero_id} = useParams()
  console.log(superhero_id)
  const supeToDisplay = superheros.find((superhero) => superhero.id == superhero_id)
  console.log(supeToDisplay)
    
  return (
    <div>
      <NewCommentForm />
      {supeToDisplay.comments.map((comment) => {
        return (
        <div className='comment-cards'>
          <h3 className='comment-user'>Anonymous: </h3>
          <ul> <em>{comment.text}</em> </ul>
        </div>
        )
      })}
    </div>
  )
}

export default Comments;