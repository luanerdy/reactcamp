import React from 'react';
import Option from './Option';

const index = ({ options, quantities, functions }) => {
	return (
		<div className="options">
			{options.map((option) => (
				<Option
					props={option}
					key={option.id}
					extra={quantities.find((element) => element.id === option.id)}
					functions={functions}
				/>
			))}
		</div>
	);
};

export default index;
