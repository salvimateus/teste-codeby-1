import React, { useEffect, useState } from 'react';

import MainMenu from '../../components/MainMenu';

import api from '../../services/api';
import formatter from '../../services/priceFormatter';

interface CartItem {
    uniqueId: string;
    name: string;
    imageUrl: string;
    price: number;
    sellingPrice: number;
}

function Acima() {
    const [products, setProducts] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    useEffect(() => {
        async function handleShoppingCart() {
            const response = await api.get('data/acima-10-reais.json');

            setProducts(response.data.items);

            handleTotalCart(response.data.items);
        }

        function handleTotalCart(productsInCart: CartItem[]) {
            let total = 0;

            productsInCart.map( (item: CartItem) => total += item.sellingPrice );

            setTotalCart(total);
        }

        handleShoppingCart();
    }, []);

    return (
        <section className="container">
            <MainMenu />

            <div className="inner-wrap inner-wrap--border-bottom">
                <h1>Meu Carrinho</h1>
            </div>

            {/* Wrap Product List */}
            <div className="wrap-shadow">
                <div className="products-list inner-wrap inner-wrap--border-bottom">

                    {
                        products.map( (item: CartItem) => {
                            return (
                                <div key={item.uniqueId} className="product-item">
                                    <img draggable="false" className="product-item__img" src={item.imageUrl} alt={item.name} />

                                    <div className="product-item__info">
                                        <h2>{item.name}</h2>
                                        <p>{formatter.format(item.price / 100)}</p>
                                        <p className="product-item__offer">{formatter.format(item.sellingPrice / 100)}</p>
                                    </div>
                                </div>
                            )
                        } )
                    }

                </div>
            </div>
            {/* End. Wrap Product List */}

            <div className="cart-footer inner-wrap inner-wrap--border-bottom">
                <div className="cart-footer__row">
                    <strong>Total:</strong>
                    <span>{formatter.format(totalCart / 100)}</span>
                </div>

                <div className="cart-footer__msg" style={(totalCart >= 1000) ? {} : { display: 'none' }}>
                    <span>Parabéns, sua compra tem frete grátis!</span>
                </div>
            </div>

            <div className="inner-wrap">
                <button className="btn-primary">Finalizar Compra</button>
            </div>
        </section>
    )
}

export default Acima;