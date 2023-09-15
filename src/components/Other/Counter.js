import { useState } from "react"
import Layout from "../Layout/Layout";

export default function Counter() {

    var [number, setNumber] = useState(0);

    return (
        <Layout>
            <h3>Contador vale: {number} </h3>
            <button onClick={(event) => setNumber(number + 1)}>Incrementar</button>
            <button onClick={(event) => setNumber(number - 1)}>Decrementar</button>
        </Layout>
    )
}