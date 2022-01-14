import React from "react";
import Meta from "../seo/Meta";
import Products from "../components/Products";
import initialState from "../initialState";

const meta = (
    <Meta
        title="Productos"
        description="Encuentra todos tus productos favoritos"
        image="https://ibb.co/QjxnVWj"
        url="https://platzi-conf-merch-bb193.web.app"
    />
)

const Home = () => {
    return (
        <>
            {meta}
            <Products products={initialState.products} />
        </>
    )
}

export default Home