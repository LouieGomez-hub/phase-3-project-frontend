import React, { useState } from 'react';

function NewSupeForm({onAddSuperhero}) {
    const [name, setName] = useState("");
    const [power, setPower] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();

        setName("");
        setPower("");

        const supeData = {
            name: name,
            power: power
        }

        fetch("http://localhost:9292/superheros", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(supeData)
        })
        .then((res) => res.json())
        .then((newSupe) => onAddSuperhero(newSupe));
    }

    return (
        <div>
            <form className='NewSupe' onSubmit={handleSubmit}>
                <label>Add Superhero:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name..."
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="name"
                    value={power}
                    placeholder="Power..."
                    onChange={(e) => setName(e.target.value)}
                />
                <input className='SubmitInput' type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewSupeForm;