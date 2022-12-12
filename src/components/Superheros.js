import React from 'react';

function Superheros({ superheros }) {
    let heroSuite;

    heroSuite = superheros.map(superhero => {
        let { id, name, power } = superhero

        return (
          <div key={id} className='suite-container'>
            <div className='cards'>
              <div className='content'>
              <h1>{name}</h1>
              <p><strong>Powers:</strong> <em>{power}</em></p>
              </div>
            </div>
          </div>
        )
    })

    return (
        <div>{heroSuite}</div>
    )
}

export default Superheros;