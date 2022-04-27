import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'

const FilmPage = () => {
	const [films, setFilms] = useState([])

	const getFilms = async () => {
		// Get films from api
		const data = await StarWarsAPI.getFilms()

		// Sort alphabetically by title
		data.results.sort((a,b) => a.title.localeCompare(b.title))

		// Update films state
		setFilms(data.results)
        console.log(data)
	}

	// Get people from api when component is first mounted
	useEffect(() => {
		getFilms()
	}, [])

    //Generate id
    const findId = (url) => {
		const id = url.slice(-2)
		return id;
	}

    if (!films) {
		return <p>Loading...</p>
	}

	return (
		<>
			<h1 className="yellow-heading">Films</h1>

			{films.length > 0 && (
				<ListGroup className="data-list">
					{films.map(film => (
        			<div key={findId(film.url)} className="card">
          			<h3>{film.title}</h3>
          			<hr/>
          			<Link to={`/films/${findId(film.url)}`}>Read more</Link>
        		</div>
      		))}
				</ListGroup>
			)}
			
		</>
	)
}

export default FilmPage;
