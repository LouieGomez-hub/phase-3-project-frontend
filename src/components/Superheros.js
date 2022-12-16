import React from 'react';
import { Link } from 'react-router-dom';
import NewSupeForm from './NewSupeForm';

function Superheros({ superheros, handleAddSupe }) {
    let heroSuite;

    heroSuite = superheros.map(superhero => {
        let { id, name, power } = superhero

        return (
          <div key={id} className='suite-container'>
            <div className='cards'>
              <h1 className='content-name'>Alias: <em>{name}</em></h1>
              <p className='content-attr'><strong>Powers:</strong> <em>{power}</em></p>
              <Link className='btn' to={`/superheros/${superhero.id}`}>View Comments</Link>  
            </div>
          </div>
        )
    })

    return (
        <div>
          <NewSupeForm onAddSuperhero={handleAddSupe}/>
          {heroSuite}
        </div>
    )
}

export default Superheros;