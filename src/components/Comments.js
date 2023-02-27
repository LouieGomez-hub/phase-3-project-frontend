import React from 'react';
import { useParams } from 'react-router-dom';

function Comments({ superheros }) {
  const {superhero_id} = useParams()
  console.log(superhero_id)
  const supeToDisplay = superheros.find((superhero) => superhero.id == superhero_id)
  console.log(supeToDisplay)
    
  return (
    <ul>
      {supeToDisplay.comments.map((comment) => {
        return (comment.text)
      })}
    </ul>
  )
}

export default Comments;