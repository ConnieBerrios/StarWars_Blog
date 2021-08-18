import React from "react";
import fondo from "../../img/fondo.jpg";
import "../../styles/home.scss";
import logo3 from "../../img/logo3.png";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<>
			<Link to="/personajes">
				<img src={logo3} style={{ marginLeft: "20px", width: "80px", height: "40px" }} />
			</Link>
			<Link to="/planetas">
				<img src={logo3} style={{ marginLeft: "20px", width: "80px", height: "40px" }} />
			</Link>
			<Link to="/naves">
				<img src={logo3} style={{ marginLeft: "20px", width: "80px", height: "40px" }} />
			</Link>
		</>
	);
};
