import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import axion from 'axios'; // esta se tiene que instalar para que aparezca todo lo item es decir todos los productos

const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(async() => {
		const response = await axion (API);
		setProducts(response.data);

	}, [])

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(products =>(
					<ProductItem />
				))}
				
			</div>
		</section>
	);
}

export default ProductList;
