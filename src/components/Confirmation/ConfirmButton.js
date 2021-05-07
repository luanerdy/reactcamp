import React from 'react';

const ConfirmButton = ({selected}) => {
    const confirm = (selected) => {
		const nome = prompt('Digite seu nome...');
		const endereco = prompt('...e seu endereço:');
        const totMain = selected.main.price * selected.main.quantity;
        const totDrink = selected.drink.price * selected.drink.quantity;
        const totDessert = selected.dessert.price * selected.dessert.quantity;
		const total = totMain + totDrink + totDessert;
		const texto = `Olá, gostaria de fazer o pedido:
			- Prato: ${selected.main.title}
			- Bebida: ${selected.drink.title}
			- Sobremesa: ${selected.dessert.title}
			Total: R$ ${total.toFixed(2).replace('.', ',')}

			Nome: ${nome}
			Endereço: ${endereco}`;

		const textoParseado = encodeURI(texto);
		const url = `https://wa.me/558193089298/?text=${textoParseado}`;
		window.location.href = url;
	};

	return (
		<button onClick={() => confirm(selected)}>
			Tudo certo, pode pedir!
		</button>
	);
};

export default ConfirmButton;
