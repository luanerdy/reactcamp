import React, { useState } from 'react';
import Header from './components/Header';
import Confirmation from './components/Confirmation';
import Bottom from './components/Bottom';
import Menu from './components/Menu';
import options from './data/options';

const App = () => {
	const [quantities, setQuantities] = useState({
		main: options.main.map((e) => ({
			id: e.id,
			category: 'main',
			selected: false,
			quantity: 0,
		})),
		drinks: options.drinks.map((e) => ({
			id: e.id,
			category: 'drinks',
			selected: false,
			quantity: 0,
		})),
		desserts: options.desserts.map((e) => ({
			id: e.id,
			category: 'desserts',
			selected: false,
			quantity: 0,
		})),
	});

	const select = (id, category) => {
		const index = quantities[category].findIndex((el) => el.id === id);
		const newQuantities = unselectPrevious(category);
		newQuantities[category][index].selected = true;
		addQuantity(id, category, newQuantities);
	};

	const unselectPrevious = (category) => {
		const newCategory = quantities[category].map((element) => ({
			...element,
			selected: false,
			quantity: 0,
		}));
		const newQuantities = { ...quantities };
		newQuantities[category] = newCategory;
		return newQuantities;
	};

	const addQuantity = (id, category, newQuantities = quantities) => {
		const newCategory = newQuantities[category].map((element) => {
			element.id === id && element.quantity++;
			return element;
		});
		newQuantities[category] = newCategory;
		setQuantities({ ...newQuantities });
	};

	const minusQuantity = (id, category, newQuantities = quantities) => {
		const newCategory = newQuantities[category].map((element) => {
			if (element.id === id) {
				element.quantity--;
				element.quantity === 0 && (element.selected = false);
			}
			return element;
		});
		newQuantities[category] = newCategory;
		setQuantities({ ...newQuantities });
	};

	return (
		<>
			<Header />
			<Confirmation />
			<Menu
				options={options}
				quantities={quantities}
				functions={[select, addQuantity, minusQuantity]}
			/>
			<Bottom />
		</>
	);
};

export default App;
