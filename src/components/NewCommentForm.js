import React, { useState } from 'react';

function NewCommentForm({onAddComment}) {
    const [text, setText] = useState("");
    const [superhero_id, setSuperhero_id] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();

        setText("");
        setSuperhero_id("");

        const supeData = {
            text: text,
            superhero_id: superhero_id
        }

        fetch("http://localhost:9292/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(supeData)
        })
        .then((res) => res.json())
        .then((newComment) => onAddComment(newComment));
    }

    return (
        <div>
            <form className='NewComment' onSubmit={handleSubmit}>
                <label>Add Comment: </label>
                <input
                    type="text"
                    name="name"
                    value={text}
                    placeholder="Enter Here..."
                    onChange={(e) => setText(e.target.value)}
                />
                <br/>
                <input
                    type="text"
                    name="name"
                    value={superhero_id}
                    placeholder="Enter ID..."
                    onChange={(e) => setSuperhero_id(e.target.value)}
                />
                <input className='SubmitInput' type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewCommentForm;