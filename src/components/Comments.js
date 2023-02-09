import React from 'react';

function Comments({ superheros }) {
  let annonText;

    annonText = superheros.map(superhero => {
        let { id, comments } = superhero

        return (
          <div key={id} className='suite-container'>
            <div>
              <h1 className='content-name'>Anonymous: </h1>
              <p className='content-attr'><em>{comments.text}</em></p>
            </div>
          </div>
        )
    })
  return (
    <div>
      {annonText}
    </div>
  )
}

export default Comments;