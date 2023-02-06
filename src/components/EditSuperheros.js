import { React, useState } from "react";

function EditSuperheros({onEditSuperheros}) {
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

        fetch(`http://localhost:9292/superheros/${superhero.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(supeData)
        })
        .then((res) => res.json())
        .then((updatedSuperhero) => onEditSuperheros(updatedSuperhero));
    }

    return (
        <div>
            <form className='UpdatedSupe' onSubmit={handleSubmit}>
                <label>Edit: </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name..."
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <input className='input2'
                    type="text"
                    name="name"
                    value={power}
                    placeholder="Power..."
                    onChange={(e) => setPower(e.target.value)}
                />
                <br/>
                <input className='EditInput' type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default EditSuperheros;