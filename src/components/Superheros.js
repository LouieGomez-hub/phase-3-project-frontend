import React from 'react';

function Superheros({ superheros }) {
    let heroSuite;

    heroSuite = superheros.map(superhero => {
        let { id, name, power } = superhero

        return (
          <div key={id} className='suite-container'>
            <div className='cards'>
              <h1 className='content-name'>{name}</h1>
              <p className='content-attr'><strong>Powers:</strong> <em>{power}</em></p>
            </div>
          </div>
        )
    })

    return (
        <div>{heroSuite}</div>
    )
}

export default Superheros;