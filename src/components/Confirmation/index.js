import React from 'react';
import { Link } from 'react-router-dom';
import Selected from './Selected';
import ConfirmButton from './ConfirmButton';

const index = ({ selected, options }) => {
	const getSelected = (selected, options) => {
		
		const main = {
			...options.main.find((el) => el.id === selected.main.id),
			quantity: selected.main.quantity,
		};
		const drink = {
			...options.drinks.find((el) => el.id === selected.drinks.id),
			quantity: selected.drinks.quantity,
		};
		const dessert = {
			...options.desserts.find((el) => el.id === selected.desserts.id),
			quantity: selected.desserts.quantity,
		};
		return { main, drink, dessert };
	};

	return (
		<>
			<div className="page-wall"></div>
			<div className="confirmation">
				<p>Confirme seu pedido</p>
				<Selected selected={[getSelected(selected, options).main]} />
				<Selected selected={[getSelected(selected, options).drink]} />
				<Selected selected={[getSelected(selected, options).dessert]} />
				<Selected
					selected={[
						getSelected(selected, options).main,
						getSelected(selected, options).drink,
						getSelected(selected, options).dessert,
					]}
					id={'total'}
				/>
				<ConfirmButton selected={getSelected(selected, options)} />
				<button>
					<Link to="/">Cancelar</Link>
				</button>
			</div>
		</>
	);
};

export default index;
