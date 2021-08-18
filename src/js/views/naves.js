import React, { useContext } from "react";
// import { CardNaves } from "../component/cardPersonajes";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Naves = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="text-center mt-5">
				NAves
				<ul>
					{/* {store.people.map((planetas, posicion) => {
						return (
							<li key={posicion}>
								{" "}
								Usuario ID {planetas.uid} de nombre {planetas.name}{" "}
								<Link to={"/planetas/" + planetas.uid}>
									<button className="btn btn-warning">Detalle</button>
								</Link>
							</li>
						);
					})} */}
				</ul>
			</div>
		</>
	);
};
