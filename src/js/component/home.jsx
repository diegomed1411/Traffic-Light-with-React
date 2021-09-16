import React, { useState } from "react";

//create your first component
const Home = () => {
	const [redLight, setRedLight] = useState(false);
	const [yellowLight, setYellowLight] = useState(false);
	const [greenLight, setGreenLight] = useState(false);

	return (
		<div className="cuerpo d-flex justify-content-center align-items-center ">
			<button type="button" className="btn btn-primary mr-5">
				Prender Todo
			</button>
			<div className="smf d-flex justify-content-center align-items-center flex-column">
				<div className="d-flex justify-content-center align-items-center">
					<div
						className={"red-light" + (redLight ? " selected" : "")}
						onClick={() => {
							setRedLight(true);
							setYellowLight(false);
							setGreenLight(false);
						}}></div>
				</div>
				<div className="d-flex justify-content-center align-items-center">
					<div
						className={
							"yellow-light" + (yellowLight ? " selected" : "")
						}
						onClick={() => {
							setRedLight(false);
							setYellowLight(true);
							setGreenLight(false);
						}}></div>
				</div>
				<div className="d-flex justify-content-center align-items-center">
					<div
						className={
							"green-light" + (greenLight ? " selected" : "")
						}
						onClick={() => {
							setRedLight(false);
							setYellowLight(false);
							setGreenLight(true);
						}}></div>
				</div>
			</div>
			<button type="button" className="btn btn-primary ml-5">
				Apagar Todo
			</button>
		</div>
	);
};

export default Home;
