import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/'

/**
 * Get all people
 */
const getPeople = async (page) => {
	const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
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

/**
 * Generate id 
 */
const getId = (url) => {
    const [_endpoint, id] = url
        .replace('https://swapi.dev/api/', '')
        .slice(0, -1)
        .split('/')
    return id
}

const APIFunctions = {
	getPeople,
	getPerson,
	getFilms,
	getFilm,
	getId
}


export default APIFunctions