import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Superheros from './Superheros';
import NewSupeForm from './NewSupeForm';


function App() {
    const [superheroes, setSuperheros] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/superheros")
        .then((res) => res.json())
        .then((superheroes) =>
            setSuperheros(superheroes)
        )
    }, [])

    function handleAddSupe(newSupe) {
        setSuperheros([...superheroes, newSupe])
    }

    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </div>
    )
}















export default App;