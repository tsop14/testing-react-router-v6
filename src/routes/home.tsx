import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
	return (
		<div className="home">
			<h1>WELCOME</h1>
			<Link to="/dog/rafa">
				<h2>See the best dog</h2>
			</Link>
		</div>
	);
};

export default Home;
