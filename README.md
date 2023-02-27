# Made Super: Sinatra/React Project

### Link to Backend:
[Phase-3-Sinatra-React-Project](https://github.com/LouieGomez-hub/phase-3-sinatra-react-project)

## Project Design:
This project was built to be a starting point for creation.

What that means is this application, Made Super, allows for all users that are interested in superheroes, superpowers/abilities or simply have a creative idea they want to express, they can do so using this web application.

With this app you have the freedom to create a powered hero that is unique to you. Assign a name and power(s) to your hero and you now have the beginnings of something that you can take to any lengths.

This app is about laying the foundation for your creative ideas, just to be a starting ground. Made Super is Made For You By You.

## Features:
* A navbar at the top of the web page to move between each of the three routes:
    * Home Page
    * About Page
    * Hero Suite
* A display of custom superheroes on the Hero Suite page, complete with names and powers, along with a form to add new heroes
* Each hero card has a link to see the specific comments that are for the hero that was clicked on, along with an additional form to add comments
* Buttons to either edit the power of any hero or delete the hero entirely

## Project Function:
This project works with the backend by sending a Get request to retrieve the superhero data that is intended to be rendered in the browser
```JSX
function App() {
    const [superheros, setSuperheros] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/superheros")
        .then((res) => res.json())
        .then((superheros) =>
            setSuperheros(superheros)
        )
    }, [])
```

Once the data is recieved this allows for it to be passed down to multiple components, such as the Superheros component, where the data is passed down to be iterated through using map to render each hero that was generated in the backend and display them on the browser
```JSX
function Superheros({ superheros, onDeleteClick }) {
    let heroSuite;

    heroSuite = superheros.map(superhero => {
        let { id, name, power } = superhero

    return (
          <div key={id} className='suite-container'>
            <div className='cards'>
              <h1 className='content-name'>Alias: <em>{name}</em></h1>
              <p className='content-attr'><strong>Powers:</strong> <em>{power}</em></p>
              <Link className='btn' to={`/superheros/${superhero.id}/comments`}>View Comments</Link>
              <button className='deletebtn' onClick={handleDeleteClick}>Delete</button>
              <EditSuperheros superhero={superhero}/>
            </div>
          </div>
        )
    })
```

The map method returns in the Comments component to iterate through the superhero data and render the comments for each specific hero when that hero is clicked on
```JSX
{supeToDisplay.comments.map((comment) => {
        return (
        <div className='comment-cards'>
          <h3 className='comment-user'>Anonymous: </h3>
          <ul> <em>{comment.text}</em> </ul>
        </div>
        )
      })}
```

State is used frequently in this project in order to achieve multiple CRUD requests. There are two forms using Post requests in order to add new superheros and new comments
```JSX
fetch("http://localhost:9292/superheros", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(supeData)
        })
        .then((res) => res.json())
        .then((newSupe) => onAddSuperhero(newSupe));

fetch("http://localhost:9292/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(supeData)
        })
        .then((res) => res.json())
        .then((newComment) => onAddComment(newComment));
```

Completing out CRUD functionality are handlers and requests to both edit the power(s) of any hero or to delete a hero entirely
```JSX
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

function handleDeleteClick() {
          fetch(`http://localhost:9292/superheros/${superhero.id}`, {
            method: "DELETE",
          })
          .then((res) => res.json())
          .then((deletedSuperhero) => onDeleteClick(deletedSuperhero));
          
        }
```

### Languages Used:
* RUBY
* JSX
* CSS
* JSON