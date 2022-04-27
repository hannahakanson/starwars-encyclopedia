import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/'


/**
 * Get all people
 */
const getPeople = async () => {
	const res = await axios.get(`${BASE_URL}/people`)
	return res.data
}

/**
 * Get a single person
 */
const getPerson = async (id) => {
	const res = await axios.get(`${BASE_URL}/people/${id}`)
	// await sleep(1500)
	return res.data
}

/**
 * Get all films
 */
 const getFilms = async () => {
	const res = await axios.get(`${BASE_URL}/films`)
	return res.data
}


/**
 * Get a single person
 */
 const getFilm = async (id) => {
	const res = await axios.get(`${BASE_URL}/films/${id}`)
	return res.data
}


export default {
	getPeople,
	getPerson,
	getFilms,
	getFilm
}
