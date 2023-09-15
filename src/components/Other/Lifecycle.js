import { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';

export default function Lifecycle() {

    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log("O componente foi montado!");
    }, []);

    useEffect(() => {
        console.log("O componente foi actualizado.");
    }, [count]);

    useEffect(() => {
        return () => {
            console.log("O componente foi desmontado.")
        }
    }, []);

    return (
        <Layout>
            <p>Contador vale: {count}</p>
            <button onClick={(event) => setCount(count + 1)}>Incrementar</button>
        </Layout>
    );
}