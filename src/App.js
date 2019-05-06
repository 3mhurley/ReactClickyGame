import React from "react";
import logo from "./images/logo.svg";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
	return (
		<div>
			<Navbar />
			<Section />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
