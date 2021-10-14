import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        })
    }

    const removeFromCart = (_payload, indexToRemove) => { // con guion bajo indico que el parametro no sera utilizado
        setState({
            ...state,
            cart: state.cart.filter((_item, indexCurrent) => indexCurrent !== indexToRemove),
        })
    }

    return {
        addToCart,
        removeFromCart,
        state,
    }
}

export default useInitialState