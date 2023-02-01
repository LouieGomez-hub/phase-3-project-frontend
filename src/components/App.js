import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Superheros from './Superheros';
import NewSupeForm from './NewSupeForm';

function App() {
    const [superheros, setSuperheros] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/superheros")
        .then((res) => res.json())
        .then((superheros) =>
            setSuperheros(superheros)
        )
    }, [])

    function handleAddSupe(newSupe) {
        setSuperheros([...superheros, newSupe])
    }

    function handleDeleteSupe(deletedSupe) {
        const updatedSuperheros = superheros.filter((superhero) => superhero.id !== deletedSupe.id)
        setSuperheros(updatedSuperheros)
    }
    
    return (
        <div>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/superheros" element={<Superheros superheros={superheros} onDeleteSuperhero={handleDeleteSupe} />}/>
                <Route exact path="/superheros" element={<NewSupeForm onAddSuperhero={handleAddSupe} />}/>
                <Route exact path="/about" element={<About />}/>
            </Routes>
        </div>
    )
}

export default App;