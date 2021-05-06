import React from 'react';

const index = () => {
	const options = {
        main: [
            {
                image: {
                    url: 'food/penne.jpg',
                    alt: 'Penne com Strogonoff',
                },
                title: 'Penne com Strogonoff',
                description: 'Estrogonofe de carne com macarrão penne',
                price: 18.5,
                quantity: 0
            },
        ],
        drinks: [

        ],
        desserts: [

        ]
    };

	return (
		<main class="menu">
			<p class="title">Primeiro, seu prato</p>
			<div class="options">
                <Option props={options.main[0]} />
				<div>
					<img
						src="./assets/images/food/frango_yin_yang.png"
						alt="Frango Yin Yang"
					/>
					<p>Frango Yin Yang</p>
					<p>Um pouco de batata, um pouco de salada</p>
					<p>R$ 14,90</p>
					<ion-icon name="checkmark-circle-sharp"></ion-icon>
				</div>
				<div>
					<img
						src="./assets/images/food/fitness.jpg"
						alt="Tradicional Fitness"
					/>
					<p>Tradicional Fitness</p>
					<p>Salada, arroz, feijão, frango e purê</p>
					<p>R$ 14,00</p>
					<ion-icon name="checkmark-circle-sharp"></ion-icon>
				</div>
				<div>
					<img src="./assets/images/food/lasanha.jpg" alt="Lasanha" />
					<p>Lasanha</p>
					<p>Massa, queijo, carne moída e presunto</p>
					<p>R$ 13,80</p>
					<ion-icon name="checkmark-circle-sharp"></ion-icon>
				</div>
				<div>
					<img
						src="./assets/images/food/panqueca.jpg"
						alt="Panqueca de Carne"
					/>
					<p>Panqueca de carne</p>
					<p>Arroz branco e panqueca de carne</p>
					<p>R$ 15,50</p>
					<ion-icon name="checkmark-circle-sharp"></ion-icon>
				</div>
			</div>
			<p class="title">Agora, sua bebida</p>
			<div class="options">
				<div>
					<img
						src="./assets/images/drinks/refri_lata.png"
						alt="Refrigerante Lata"
					/>
					<p>Refrigerante lata</p>
					<p>Refri lata 350ml geladinho</p>
					<p>R$ 4,90</p>
					<ion-icon name="checkmark-circle-sharp"></ion-icon>
				</div>
				<div>
					<img
						src="./assets/images/drinks/refri_1lt.jpg"
						alt="Refrigerante 1 Litro"
					/>
					<p>Refrigerante 1 litro</p>
					<p>1 Litro de refri</p>
					<p>R$ 8,90</p>
					<ion-icon name="checkmark-circle-sharp"></ion-icon>
				</div>
				<div>
					<img
						src="./assets/images/drinks/milk_shake.jpg"
						alt="Milk shake"
					/>
					<p>Milk shake</p>
					<p>Milk shake gostoso e nutritivo</p>
					<p>R$ 12,50</p>
					<ion-icon name="checkmark-circle-sharp"></ion-icon>
				</div>
				<div>
					<img
						src="./assets/images/drinks/suco_laranja.jpg"
						alt="Suco de Laranja"
					/>
					<p>Suco de laranja</p>
					<p>Suco natural da fruta</p>
					<p>R$ 7,90</p>
					<ion-icon name="checkmark-circle-sharp"></ion-icon>
				</div>
			</div>
			<p class="title">Por fim, sua sobremesa</p>
			<div class="options">
				<div>
					<img src="./assets/images/desserts/pudim.png" alt="Pudim" />
					<p>Pudim</p>
					<p>Apenas pudim</p>
					<p>R$ 7,90</p>
					<ion-icon name="checkmark-circle-sharp"></ion-icon>
				</div>
				<div>
					<img
						src="./assets/images/desserts/pave.jpg"
						alt="Pavê de Chocolate"
					/>
					<p>Pavê de chocolate</p>
					<p>É pavê ou pacumê?</p>
					<p>R$ 9,90</p>
					<ion-icon name="checkmark-circle-sharp"></ion-icon>
				</div>
				<div>
					<img
						src="./assets/images/desserts/torta.jpg"
						alt="Torta de Limão"
					/>
					<p>Torta de limão</p>
					<p>Torta cremosa e deliciosa</p>
					<p>R$ 8,50</p>
					<ion-icon name="checkmark-circle-sharp"></ion-icon>
				</div>
				<div>
					<img
						src="./assets/images/desserts/petit.jpg"
						alt="Petit Gateau"
					/>
					<p>Petit gateau</p>
					<p>Bolinho com sorvete gourmet</p>
					<p>R$ 12,90</p>
					<ion-icon name="checkmark-circle-sharp"></ion-icon>
				</div>
			</div>
		</main>
	);
};

export default index;
