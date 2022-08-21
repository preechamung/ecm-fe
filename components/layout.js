import Head from "next/head"
import Sidebar from './sidebar'
export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Layouts Example</title>
            </Head>
            <Sidebar />
            <main>{children}</main>
        </>
    );
}
