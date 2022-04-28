import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'
import ListGroup from 'react-bootstrap/ListGroup'


const SinglePersonPage = () => {
	const [person, setPerson] = useState([])
	const [films, setFilms] = useState([])
	const { id } = useParams()

	const getPerson = async (id) => {
		const data = await StarWarsAPI.getPerson(id)
		setPerson(data)
		setFilms(data.films)
	}

	useEffect(() => {
		getPerson(id)
	}, [id])

	if (!person) {
		return <h1 className="loading">Loading...</h1>
	}

	return (
		<div className="data-info">
			<Button className="back-btn" variant="warning" as={Link} to={`/people`}>Back</Button>
			<h1>{person.name}</h1>
			<hr/>
			<p><strong>Birth year: </strong>{person.birth_year}</p>
			<p><strong>Height: </strong>{person.height}</p>
			<p><strong>Hair color: </strong>{person.hair_color}</p>
			<p><strong>Eye color: </strong>{person.eye_color}</p>
			<hr/>
			<h2>Films</h2>
			<ListGroup>
              {films.map((film, index) => 
                (
                  <ListGroup.Item
                    action
                    as={Link}
                    to={`/films/${StarWarsAPI.getId(film)}`}
                    key={StarWarsAPI.getId(film)}
                  >Film {index+1}
				  </ListGroup.Item>
                )
              )}
          </ListGroup>
		</div>
	)
}

export default SinglePersonPage
