import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'
import ListGroup from 'react-bootstrap/ListGroup'

const SingleFilmPage = () => {
	const [film, setFilm] = useState([])
	const [characters, setCharacters] = useState([])
	const { id } = useParams()
	const { people } = film

	const getFilm = async (id) => {
		const data = await StarWarsAPI.getFilm(id)
		setFilm(data)
		setCharacters(data.characters)
		console.log("film data:", data)
	}

	useEffect(() => {
		getFilm(id)
	}, [id])

	if (!film) {
		return <p>Loading...</p>
	}

	console.log(people)


	return (
		<div className="data-info">
            <Button className="back-btn" variant="warning" as={Link} to={`/films/`}>Back</Button>
			<h1>{film.title}</h1>
            <hr/>
    
            <p><strong>Release date: </strong>{film.release_date}</p>
            <p><strong>Director: </strong>{film.director}</p>
            <p><strong>Producer: </strong>{film.producer}</p>
            <hr/>
            <h3>Opening</h3>
            <p>"{film.opening_crawl}"</p>
            <hr/>
            <h3>Characters</h3>
			<ListGroup>
              {characters.map((person, index) => 
                (
                  <ListGroup.Item
                    action
                    as={Link}
                    to={`/people/${StarWarsAPI.getId(person)}`}
                    key={StarWarsAPI.getId(person)}
                  >Character {index+1}</ListGroup.Item>
                )
              )}
          </ListGroup>
		</div>
	)
}

export default SingleFilmPage
