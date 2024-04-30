
//importing typewriter-effect
import Typewriter from "typewriter-effect";
// import './App.css';

function App() {
	return (
		<div className="App">
			<Typewriter
				onInit={(typewriter) => {
					typewriter
						.typeString("Artisan Avenue")
						.pauseFor(1000)
						.deleteAll()
						.typeString("Welcomes You")
						.start();
				}}
			/>
		</div>
	);
}

export default App;
