import React, { useContext } from "react";
import { CardPersonajes } from "../component/cardPersonajes";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Personajes = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="text-center mt-5">
				<ul>
					{store.people.map((personaje, posicion) => {
						return (
							<li key={posicion}>
								{" "}
								Usuario ID {personaje.uid} de nombre {personaje.name}{" "}
								<Link to={"/personaje/" + personaje.uid}>
									<button className="btn btn-warning">Detalle</button>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};
