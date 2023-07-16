import { useParams } from "react-router-dom";
import "./dog.css";

const Dog = () => {
	const { name } = useParams() as { name: string };
	const isBestDog = name?.toLowerCase() === "rafa";
	return (
		<div className="dog-container">
			<div className="dog__avatar" />
			<div className="dog__text">
				<h1>This is {name} </h1>
				{isBestDog && <h2>He is the best dog</h2>}
			</div>
		</div>
	);
};

export default Dog;
