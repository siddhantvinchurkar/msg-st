import Layout from '../components/BaseLayout';
import CardPanel from '../components/CardPanel';
import ReactDOMServer from 'react-dom/server';

function NoScript(props) {
    const staticMarkup = ReactDOMServer.renderToStaticMarkup(props.children)
    return <noscript dangerouslySetInnerHTML={{
        __html: "Unfortunately, your browser does not support javascript. Either that or it's disabled. Maybe try to enable it? Privacy centric browsers like Tor or Brave tend to do this more often than you think. Don't worry. We respect your privacy and will never collect personal data from you without your explicit consent."
    }} />
}

function Index() {
    return (
        <Layout>
            <NoScript />
            <main>
                <div className="row">
                    <div className="col s12 m12 l10 xl8 offset-l1 offset-xl2">
                        <div className="row">
                            <div className="col s12 m12 l6 xl6">
                                <CardPanel title="Testing From" subtitle="" id="ip" cid="t1" />
                                <CardPanel title="Ping" subtitle="ms" id="latency" cid="b1" />
                            </div>
                            <div className="col s12 m12 l6 xl6">
                                <CardPanel title="Download Bandwidth" subtitle="Mbps" id="download" cid="t2" />
                                <CardPanel title="Upload Bandwidth" subtitle="Mbps" id="upload" cid="b2" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <script type="text/javascript" src="/scripts/jquery.min.js" defer></script>
            <script type="text/javascript" src="/scripts/materialize-plm.min.js" defer></script>
            <script type="text/javascript" src="/scripts/lazysizes.min.js" async></script>
            <script type="text/javascript" src="/scripts/network.min.js" defer></script>
            <script type="text/javascript" src="/scripts/sweetalert2.js" defer></script>
            <script type="text/javascript" src="/scripts/main.js" defer></script>
        </Layout>
    );
}

export default Index;