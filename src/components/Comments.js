import React from 'react';
import { useParams } from 'react-router-dom';

function Comments({ superheros }) {
  const {superhero_id} = useParams()
  console.log(superhero_id)
  const supeToDisplay = superheros.find((superhero) => superhero.id == superhero_id)
  console.log(supeToDisplay)
    
  return (
    <div>
      {supeToDisplay.comments.map((comment) => {
        return (
        <div className='comment-cards'>
          <h1 className='comment-user'>Anonymous: </h1>
          <ul> <em>{comment.text}</em> </ul>
        </div>
        )
      })}
    </div>
  )
}

export default Comments;