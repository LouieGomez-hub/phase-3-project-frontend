import { React, useState } from "react";

function EditSuperheros({ superhero, onUpdateSupe }) {
    const [power, setPower] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/superheros/${superhero.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                power: power,
            }),
        })
        .then((res) => res.json())
        .then((updatedSupe) => onUpdateSupe(updatedSupe))
    }

    return (
        <div>
            <form className='UpdatedSupe' onSubmit={handleSubmit}>
                <input className='EditInput' type="submit" value="Edit" />
                <input className='input3'
                    type="text"
                    name="name"
                    value={power}
                    placeholder="Power..."
                    onChange={(e) => setPower(e.target.value)}
                />
            </form>
        </div>
    )
}

export default EditSuperheros;