import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Superheros from './Superheros';
import Comments from './Comments';
import NewSupeForm from './NewSupeForm';

function App() {
    const [superheros, setSuperheros] = useState([]);
    const [comments, setComments] = useState("");

    useEffect(() => {
        fetch("http://localhost:9292/superheros")
        .then((res) => res.json())
        .then((superheros) =>
            setSuperheros(superheros)
        )
    }, [])

    useEffect(() => {
        fetch("http://localhost:9292/comments")
        .then((res) => res.json())
        .then((comments) => 
            setComments(comments)
        )
    })

    function handleAddSupe(newSupe) {
        setSuperheros([...superheros, newSupe])
    }

    return (
        <div>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/superheros" element={<Superheros superheros={superheros} />}/>
                <Route exact path="/superheros/:id" element={<Comments comments={comments} />}/>
                <Route exact path="/superheros" element={<NewSupeForm onAddSuperhero={handleAddSupe} />}/>
                <Route exact path="/about" element={<About />}/>
            </Routes>
        </div>
    )
}

export default App;