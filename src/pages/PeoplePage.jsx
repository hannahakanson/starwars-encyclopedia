import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'


const PeoplePage = () => {
	const [people, setPeople] = useState([])
	const [page, setPage] = useState(0)

	const getPeople = async () => {
		// Get people from api
		const data = await StarWarsAPI.getPeople()

		// update people state
		setPeople(data.results)

		console.log(data)
	}

	//Handle click
	const handleClick = () => {
		console.log("Hello")
	}

	useEffect(() => {

	}, [page])


	// Get people from api when component is first mounted
	useEffect(() => {
		getPeople()
	}, [])

	//Generate id
	const findId = (url) => {
		const id = url.slice(-2)
		return id;
	  }

	if (!people) {
		return <p>Loading...</p>
	}

	return (
		<>
			<h1 className="yellow-heading">Characters</h1>

			{people.length > 0 && (
				<ListGroup className="data-list">
					{people.map(person => (
        			<div key={findId(person.url)} className="card">
          			<h3>{person.name}</h3>
          			<hr/>
          			<Link to={`/people/${findId(person.url)}`}>Read more</Link>
        		</div>
      		))}
				</ListGroup>
			)}
			<Button variant="warning" onClick={() => handleClick()}>Next page</Button>
		</>
	)
}

export default PeoplePage;
