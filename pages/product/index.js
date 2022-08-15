import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

export default function Product() {
    return <h1 className="text-3xl font-bold underline">111</h1>
}

Product.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar />
            <div class="ml-28">{page}</div>
        </Layout>
    );
};