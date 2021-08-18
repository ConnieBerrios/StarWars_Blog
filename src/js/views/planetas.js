import React, { useContext } from "react";
// import { CardPersonajes } from "../component/cardPersonajes";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planetas = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="text-center mt-5">
				<ul>
					{store.planets.map((planetas, posicion) => {
						return (
							<li key={posicion}>
								{" "}
								Usuario ID {planetas.uid} de nombre {planetas.name}{" "}
								<Link to={"/planetas/" + planetas.uid}>
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
