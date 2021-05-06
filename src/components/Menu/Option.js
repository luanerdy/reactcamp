import React from 'react';

const Option = ({ image, title, description, price, quantity }) => {
	return (
		<div>
			<img
				src={`./assets/images/${image.url}`}
				alt={image.alt}
			/>
			<p>{title}</p>
			<p>{description}</p>
			<p>R$ {price.toFixed(2).replace('.', ',')}</p>
			<ion-icon name="checkmark-circle-sharp"></ion-icon>
		</div>
	);
};

export default Option;
