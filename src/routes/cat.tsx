import { useParams } from "react-router-dom";
import "./cat.css";

const Cat = () => {
	const { name } = useParams() as { name: string };
	return (
		<div className="cat-container">
			<h1>Look at {name} fly</h1>
			<iframe
				title="nyan cat"
				src="https://giphy.com/embed/VGuAZNdkPUpEY"
				width="480"
				height="251"
				className="giphy-embed"
				allowFullScreen
			/>
			<p>
				<a href="https://giphy.com/gifs/meme-nyan-cat-VGuAZNdkPUpEY">
					via GIPHY
				</a>
			</p>
		</div>
	);
};

export default Cat;
