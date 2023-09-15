import { useState } from "react";
import Layout from "../Layout/Layout";

export default function ConditionalRendering() {

    let [isLogedIn, setIsLogedIn] = useState(true);

    return (
        <Layout>
            {isLogedIn ?
                <p>O usuário está logado</p>
                :
                <p>O usuário não está logado</p>
            }
            <button onClick={(e) => setIsLogedIn(!isLogedIn)}>Alterar estado</button>
        </Layout>
    );
}