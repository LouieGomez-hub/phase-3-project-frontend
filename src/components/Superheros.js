import React from 'react';
import { Link } from 'react-router-dom';
import EditSuperheros from './EditSuperheros';
import NewSupeForm from './NewSupeForm';

function Superheros({ superheros, onDeleteClick }) {
    let heroSuite;

    heroSuite = superheros.map(superhero => {
        let { id, name, power } = superhero

        function handleDeleteClick() {
          fetch(`http://localhost:9292/superheros/${superhero.id}`, {
            method: "DELETE",
          })
          .then((res) => res.json())
          .then((deletedSuperhero) => onDeleteClick(deletedSuperhero));
          
        }

        return (
          <div key={id} className='suite-container'>
            <div className='cards'>
              <h1 className='content-name'>Alias: <em>{name}</em></h1>
              <p className='content-attr'><strong>Powers:</strong> <em>{power}</em></p>
              <Link className='btn' to={`/superheros/${superhero.id}/comments`}>View Comments</Link>
              <button className='deletebtn' onClick={handleDeleteClick}>Delete</button>
              <EditSuperheros superhero={superhero}/>
            </div>
          </div>
        )
    })

    return (
        <div>
          <NewSupeForm />
          {heroSuite}
        </div>
    )
}

export default Superheros;