import React, { useContext } from "react";
// import { CardPlaneta } from "../component/cardPersonajes";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Planeta = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<div className="text-center mt-5">
				<h2>aqui va la info del planeta {store.planets[params.idplanetas].name}</h2>
				<Link to={"/planetas"}>
					<button className="btn btn-warning">Volver a Planetas</button>
				</Link>
			</div>
		</>
	);
};
