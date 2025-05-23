import React, { useState } from "react";
import styles from './produtos.css';
import Carrinho from "./carrinho";
import { produtos } from "./produtos.js";

export default function Produtos() {
//     const [productsInCart, setProductsInCart] = useState([]);
//     const [showCart, setShowCart] = useState(0);
// 
//     function addCart(product) {
//         setProductsInCart([...productsInCart, product]);
//         setShowCart(1);
//     }
    
    return (
        <>
            {/* <Carrinho productsInCart={productsInCart} showCart={showCart} setShowCart={setShowCart} /> */}
            <div className={styles.container}>
                <div className={styles.produtos}>
                    {
                        produtos.map((item, index) => (
                            <div className={styles.produto} key={index}>
                                <div className={styles.imagem}>
                                    <img src={item.imagem} alt={item.nome} />
                                </div>
                                <div className={styles.nome}>{item.nome}</div>
                                <div className={styles.valor}>
                                    R$ {item.valor.toFixed(2)}
                                </div>
                                <button>Comprar</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}