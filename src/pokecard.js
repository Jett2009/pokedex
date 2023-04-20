import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => {
	const { id, name, type, base_experience } = props.pokemon;
	let imgsrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

	return (
		<div className="card">
			<img src={imgsrc} alt="" />
			<div className="card-body">
				{name}
				<div className="card-text">
					Type: {type} <br /> EXP: {base_experience}
				</div>
			</div>
		</div>
	);
};

export default Pokecard;
