import LayoutPrivacy from '../components/BaseLayoutPrivacy';
import ReactDOMServer from 'react-dom/server';

function NoScript(props) {
    const staticMarkup = ReactDOMServer.renderToStaticMarkup(props.children)
    return <noscript dangerouslySetInnerHTML={{
        __html: "Unfortunately, your browser does not support javascript. Either that or it's disabled. Maybe try to enable it? Privacy centric browsers like Tor or Brave tend to do this more often than you think. Don't worry. We respect your privacy and will never collect personal data from you without your explicit consent."
    }} />
}

function Privacy() {
    return (
        <LayoutPrivacy>
            <NoScript />
            <main>
                <div className="row">
                    <div className="col s12 m12 l10 xl8 offset-l1 offset-xl2">
                        <div className="row">
                            <h1>Content Goes Here</h1>
                        </div>
                    </div>
                </div>
            </main>
            <script type="text/javascript" src="/scripts/jquery.min.js" defer></script>
            <script type="text/javascript" src="/scripts/materialize-plm.min.js" defer></script>
            <script type="text/javascript" src="/scripts/lazysizes.min.js" async></script>
            <script type="text/javascript" src="/scripts/privacy.js" defer></script>
        </LayoutPrivacy>
    );
}

export default Privacy;