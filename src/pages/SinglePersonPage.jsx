//import { getQueriesForElement } from '@testing-library/dom'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'

const SinglePersonPage = () => {
	const [person, setPerson] = useState()
	const { id } = useParams()


	const getPerson = async (id) => {
		const data = await StarWarsAPI.getPerson(id)
		setPerson(data)
	}


	useEffect(() => {
		getPerson(id)
	}, [id])

	if (!person) {
		return <h1 className="loading">Loading...</h1>
	}

	return (
		<div className="data-info">
			<Button className="back-btn" variant="warning" as={Link} to={`/people/`}>Back</Button>
			<h1>{person.name}</h1>
			<hr/>
			<p><strong>Birth year: </strong>{person.birth_year}</p>
			<p><strong>Height: </strong>{person.height}</p>
			<p><strong>Hair color: </strong>{person.hair_color}</p>
			<p><strong>Eye color: </strong>{person.eye_color}</p>
			<hr/>
			<h2>Films</h2>
			
		</div>
	)
}

export default SinglePersonPage
