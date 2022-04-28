import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'



const PeoplePage = () => {
	const [people, setPeople] = useState([])
	const [page, setPage] = useState(1)

	const getPeople = async () => {
		// Get people from api
		const data = await StarWarsAPI.getPeople(page)

		// update people state
		setPeople(data.results)

		console.log(data)
	}

	// Get people from api when component is first mounted
	useEffect(() => {
		getPeople()
		//directing client to top of page
		window.scrollTo(0,0);
	}, [page])



	return (
		<>
			{people.length == 0 && (
			<div className="d-flex justify-content-center align-items-center">
				<div className="lds-ring">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			)}

			{people.length > 0 && (
				<>
				<h1 className="yellow-heading">CHARACTERS</h1>
				<ListGroup className="data-list">
					{people.map(person => (
        			<div key={StarWarsAPI.getId(person.url)} className="card">
						<h3>{person.name}</h3>
						<hr/>
						<p><strong>Birth year: </strong>{person.birth_year}</p>
						<p><strong>Gender: </strong>{person.gender}</p>
						<Link to={`/people/${StarWarsAPI.getId(person.url)}`}>Read more</Link>
        			</div>
      				))}
				</ListGroup>

			<div className='d-flex justify-content-center align-items-center p-4'>
				{page !==1 && 
				<Button 
					variant="warning" 
					className="m-4"
					onClick={() => setPage(prevValue => prevValue - 1)}
					> ← 
				</Button>
				}
				<h4 className="yellow-heading m-4"> Page: {page} </h4>
				<Button 
					variant="warning" 
					className="m-4" 
					onClick={() => setPage(prevValue => prevValue + 1)}
					> → 
				</Button>
			</div>
			</>
			)}
			
		</>
	)
}

export default PeoplePage;
