import { React, useState } from "react";

function EditSuperheros({ superhero, onUpdateSupe }) {
    const [name, setName] = useState("");
    const [power, setPower] = useState("");

    function handleSubmit(e) {
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
        .then((updatedSupe) => onUpdateSupe(updatedSupe))
    }

    return (
        <div>
            <form className='UpdatedSupe' onSubmit={handleSubmit}>
                <label>Edit: </label>
                <input className='input3'
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name..."
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <input className='input4'
                    type="text"
                    name="name"
                    value={power}
                    placeholder="Power..."
                    onChange={(e) => setPower(e.target.value)}
                />
                <br/>
                <input className='SubmitInput' type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default EditSuperheros;