import React from 'react';
import { Link } from 'react-router-dom';
import NewSupeForm from './NewSupeForm';

function Superheros({ superheros, onDeleteClick, onUpdateSuperhero }) {
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

          function handleEditSubmit(e) {
            e.preventDefault();
            fetch(`http://localhost:9292/superheros/${superhero.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: name,
                power: power,
              }),
            })
            .then((res) => res.json())
            .then((updatedSuperhero) => onUpdateSuperhero(updatedSuperhero));
          }

        return (
          <div key={id} className='suite-container'>
            <div className='cards'>
              <h1 className='content-name'>Alias: <em>{name}</em></h1>
              <p className='content-attr'><strong>Powers:</strong> <em>{power}</em></p>
              <Link className='btn' to={`/superheros/${superhero.id}`}>View Comments</Link>
              <button className='deletebtn' onClick={handleDeleteClick}>Delete</button>
              <button className='deletebtn' onClick={handleEditSubmit}>Edit</button>
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