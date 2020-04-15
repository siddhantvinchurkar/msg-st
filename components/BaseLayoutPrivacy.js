import { Helmet } from 'react-helmet';
import Headdie from './Headdie';
import Header from './Header';
import FooterPrivacy from './FooterPrivacy';

const LayoutPrivacy = props => (
    <div>
        <Headdie />
        <Header />
        <Helmet>
            <html lang="en-IN" />
        </Helmet>
        {props.children}
        <FooterPrivacy />
    </div>);

export default LayoutPrivacy;