//Hay que saber que es te botton cuando se le click muestre menu de usuario entonces hay que importa el archivo menu que esta aparte 

import React, {useState} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg'

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () =>{
		setToggle(!toggle); //se le pone ! para cambair si esta en tru pasa a false o lo contrario
	}
	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle} >
					platzi@example.com
					</li>
					<li className="navbar-shopping-cart">
						<img src={shoppingCart} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
			{toggle &&	<Menu/>} 
		{/* 	se pone asi toggle para cuando se clic cambia ya que
		arriba se inicia en false es decir no aparece nada cuando 
		le damos click va a cambair a menu */}
		
		</nav>
	);
}

export default Header;
