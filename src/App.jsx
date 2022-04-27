import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import PeoplePage from './pages/PeoplePage'
import SinglePersonPage from './pages/SinglePersonPage'
import FilmPage from './pages/FilmPage'
import SingleFilmPage from './pages/SingleFilmPage'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {

	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/people" element={<PeoplePage />} />
					<Route path="/people/:id" element={<SinglePersonPage />} />
					<Route path="/films" element={<FilmPage />} />
					<Route path="/films/:id" element={<SingleFilmPage />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App;
