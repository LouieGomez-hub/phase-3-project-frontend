import { React, } from 'react';
import { Link } from 'react-router-dom';
import NewSupeForm from './NewSupeForm';
import EditSuperheros from './EditSuperheros';

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

        function handleEditSuperheros(updatedSuperhero) {
          const updatedSuperheros = superheros.map((superhero) => {
              if(superhero.id === updatedSuperhero.id) {
                  return updatedSuperhero;
              } else {
                  return superhero;
              }
          });
          handleEditSuperheros(updatedSuperheros)
        }

        return (
          <div key={id} className='suite-container'>
            <div className='cards'>
              <h1 className='content-name'>Alias: <em>{name}</em></h1>
              <p className='content-attr'><strong>Powers:</strong> <em>{power}</em></p>
              <Link className='btn' to={`/superheros/${superhero.id}`}>View Comments</Link>
              <button className='deletebtn' onClick={handleDeleteClick}>Delete</button>
              <EditSuperheros onEditSuperheros={handleEditSuperheros}/>
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