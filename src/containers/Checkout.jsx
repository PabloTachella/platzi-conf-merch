import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Meta from "../seo/Meta";
import AppContext from "../context/AppContext";
import { handleSumTotal } from "../utils";
import '../styles/components/Checkout.css'

const meta = (
    <Meta
        title="Checkout"
    />
)

const Checkout = () => {

    const { state, removeFromCart } = useContext(AppContext)
    const { cart } = state

    const handleRemove = (product, index) => () => {
        removeFromCart(product, index)
    }

    return (
        <>
        {meta}
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>{cart.length > 0 ? `Lista de Pedidos:` : `Sin Pedidos`}</h3>
                {cart.map((item, i) => (
                    <div className="Checkout-item" key={i}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                        <button type="button" onClick={handleRemove(item, i)}>
                            <i className="fas fa-trash-alt" title="Eliminar" />
                        </button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="Checkout-sidebar">
                    <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
                    <Link to="/checkout/information">
                        <button type="button">Continuar pedido</button>
                    </Link>
                </div>
            )}
        </div>
        </>
    )
}

export default Checkout