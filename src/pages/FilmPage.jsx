import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'

const FilmPage = () => {
	const [films, setFilms] = useState([])

	const getFilms = async () => {
		// Get films from api
		const data = await StarWarsAPI.getFilms()

		// Update films state
		setFilms(data.results)
        console.log(data)
	}

	// Get people from api when component is first mounted
	useEffect(() => {
		getFilms()
	}, [])


	return (
		<>
			{films.length == 0 && (
			<div className="loading-page d-flex justify-content-center align-items-center">
				<div className="lds-ring">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			)}

			{films.length > 0 && (
				<>
				<h1 className="yellow-heading">FILMS</h1>
				<ListGroup className="data-list">
					{films.map(film => (
        			<div key={StarWarsAPI.getId(film.url)} className="card">
          			<h3>{film.title}</h3>
          			<hr/>
					<p><strong>Released:</strong> {film.release_date}</p>
					<p><strong>Directed by:</strong> {film.director}</p>
					<p><strong>Episode:</strong> {film.episode_id}</p>
          			<Link to={`/films/${StarWarsAPI.getId(film.url)}`}>Read more</Link>
        		</div>
      		))}
				</ListGroup>
				</>
			)}
			
		</>
	)
}

export default FilmPage;
