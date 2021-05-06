import React from 'react';
import { Link } from 'react-router-dom';

const index = ({ selected }) => {
	return (
		<div className="bottombar">
			<button className={selected ? "" : "blocked"}>
				<p className="button-text">
					Selecione os 3 itens para fechar o pedido
				</p>
				<Link to="/confirmation"><p className="button-text">Fechar pedido</p></Link>
			</button>
		</div>
	);
};

export default index;
