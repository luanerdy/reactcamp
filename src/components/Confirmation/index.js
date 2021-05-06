import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
	return (
		<>
			<div className="page-wall"></div>
			<div className="confirmation">
				<p>Confirme seu pedido</p>
				<div>
					<p>food name</p>
					<p>food value</p>
				</div>
				<div>
					<p>drink name</p>
					<p>drink value</p>
				</div>
				<div>
					<p>dessert name</p>
					<p>dessert value</p>
				</div>
				<div id="total">
					<p>total</p>
					<p>total value</p>
				</div>
				<button>Tudo certo, pode pedir!</button>
				<button><Link to="/">Cancelar</Link></button>
			</div>
		</>
	);
};

export default index;
