import React, { useContext } from "react";
// import { CardPlaneta } from "../component/cardPersonajes";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Nave = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<div className="text-center mt-5">
				<h2>aqui va la info del personaje {store.people[params.idplanetas - 1].name}</h2>
				<Link to={"/naves"}>
					<button className="btn btn-warning">Volver a Naves</button>
				</Link>
			</div>
		</>
	);
};
