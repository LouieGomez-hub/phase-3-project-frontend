import { React, useState } from "react";

function EditSuperhero({ superhero, onUpdateSuperhero }) {
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
      .then((updatedSuperhero) => onUpdateSuperhero(updatedSuperhero));
    }

    return (
      <div>
        <form className='EditSupe' onSubmit={handleSubmit}>
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
          <input className='SubmitInput' type="submit" value="Submit" />
        </form>
      </div>
    )

  }


export default EditSuperhero;