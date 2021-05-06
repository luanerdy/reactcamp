import React from 'react';

const Option = ({ props, extra, functions }) => {
	const { id, image, title, description, price } = props;
	const { category, quantity, selected } = extra;
	const [ select, addQuantity, minusQuantity ] = functions;

	return (
		<div onClick={selected ? (() => {}) : (() => select(id, category))} className={selected ? 'selected' : ''}>
			<img src={`./assets/images/${image}`} alt={title} />
			<p>{title}</p>
			<p>{description}</p>
			<p>R$ {price.toFixed(2).replace('.', ',')}</p>
			<div className="counter">
				<span onClick={() => minusQuantity(id, category)}>-</span>
				<span>{quantity}</span>
				<span onClick={() => addQuantity(id, category)}>+</span>
			</div>
		</div>
	);
};

export default Option;
