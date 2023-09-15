import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

export default function HomePage() {

    return (
        <Layout>
            <section>
                <h1>
                    Esta é a Página Inicial!
                </h1>
                <p>
                    Navegar para
                </p>
                <p>
                    <Link to='/todolist'>TodoList</Link>
                    <Link to='/helloworld'>HelloWorld</Link>
                    <Link to='/myname'>Meu Nome</Link>
                    <Link to='/counter'>Contador</Link>
                    <Link to='/lifecycle'>Ciclo de Vida</Link>
                    <Link to='/conditionalrendering'>Renderização Condicional</Link>
                </p>
            </section>
        </Layout>
    );
}