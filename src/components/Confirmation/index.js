import React from 'react';

const index = () => {
	return (
		<>
			<div class="page-wall hidden"></div>
			<div class="confirmation hidden">
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
				<button>Cancelar</button>
			</div>
		</>
	);
};

export default index;
