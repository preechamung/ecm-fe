import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function Page() {
  return <h1 className="text-3xl font-bold underline">Hello world1!</h1>
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      <div class="ml-28">{page}</div>
    </Layout>
  );
};
