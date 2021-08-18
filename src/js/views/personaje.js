import React, { useContext } from "react";
// import { CardPersonajes } from "../component/cardPersonajes";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Personaje = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<div className="text-center mt-5">
				<h2>aqui va la info del personaje {store.people[params.idpersonaje - 1].name}</h2>
				<Link to={"/personajes"}>
					<button className="btn btn-warning">Volver a Personajes</button>
				</Link>
			</div>
		</>
	);
};
