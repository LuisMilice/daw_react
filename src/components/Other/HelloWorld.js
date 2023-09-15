import Layout from "../Layout/Layout";

export default function HelloWorld({ children }) {

    return (
        <Layout>
            <h1>Hello, World!</h1>
            {children}
        </Layout>
    )
}