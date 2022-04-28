import Image from 'react-bootstrap/Image'
import StarWarsLogo from '../assets/images/starwars-encyclopdia.png'

const HomePage = () => {
	return (
		<div className="homepage-container d-flex justify-content-center align-items-center">
			<Image className="homepage-img" src={StarWarsLogo} fluid />
		</div>
	)
}

export default HomePage
