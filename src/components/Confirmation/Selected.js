import React from 'react';

const Selected = ({selected, id = ''}) => {
	return (
		<div id={id}>
			<p>{id.toUpperCase() || `${selected[0].quantity}x ${selected[0].title}`}</p>
			<p>{(selected.reduce((acc, cur) => {
                acc+= cur.price * cur.quantity;
                return acc;
            }, 0)).toFixed(2).replace('.', ',')}</p>
		</div>
	);
};

export default Selected;
