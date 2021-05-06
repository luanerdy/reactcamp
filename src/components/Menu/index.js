import React from 'react';
import Options from './Options';

const index = ({ options, quantities, functions }) => {
	return (
		<main className="menu">
			<p className="title">Primeiro, seu prato</p>
			<Options
				options={options.main}
				quantities={quantities.main}
				functions={functions}
			/>
			<p className="title">Agora, sua bebida</p>
			<Options
				options={options.drinks}
				quantities={quantities.drinks}
				functions={functions}
			/>
			<p className="title">Por fim, sua sobremesa</p>
			<Options
				options={options.desserts}
				quantities={quantities.desserts}
				functions={functions}
			/>
		</main>
	);
};

export default index;
