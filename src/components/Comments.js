import React from 'react';

function Comments({ comments }) {
    let anonyText;

    anonyText = comments.map((comment) => 
          <li className='card'>
            <h3>Anonnymous:</h3>
            <p className='div-feed'>{comment.text}</p>
          </li>)

    return (
      <div className='comment'>
        {anonyText}
      </div>
    )
}

export default Comments;