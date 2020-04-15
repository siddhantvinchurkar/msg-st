import Link from 'next/link';

const Footer = () => (
    <footer className="page-footer z-depth-5">
        <div className="progress z-depth-5">
            <div id="progress-bar" className="determinate"></div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col s12 m12 l6 xl6">
                    <h1 className="valign-wrapper xl-text-footer black-text"><i className="black-text material-icons footer-logo">all_inclusive</i></h1>
                    <h1 className="xl-text-footer-heading black-text lobster"><b>Speed Test</b></h1>
                </div>
                <div className="col s12 m12 l6 xl6">
                    <h3 className="black-text lobster"><b>Hello, React!</b></h3>
                    <h4 className="black-text"><b>MSG Speed Test is a Progressive Web App built with <Link href="//reactjs.org/"><a target="_blank" rel="noreferrer" title="React.js" aria-label="React.js"><img alt="Some things in life are worth waiting for." className="lazyload circle responsive-img" data-src="/images/icons/reactjs_logo.webp" /></a></Link> and <Link href="//nextjs.org/"><a target="_blank" rel="noreferrer" title="Next.js" aria-label="Next.js"><img alt="Some things in life are worth waiting for." className="lazyload circle responsive-img" data-src="/images/icons/nextjs_logo.webp" /></a></Link>.</b></h4>
                    <h5 className="black-text"><i><b className="valign-wrapper">Check it out on&emsp;<Link href="//github.com/siddhantvinchurkar/msg-st"><a target="_blank" rel="noreferrer" title="GitHub Repository" aria-label="GitHub Repository"><img alt="Some things in life are worth waiting for." className="lazyload circle responsive-img" data-src="/images/icons/github_logo.webp" /></a></Link>&emsp;.</b></i></h5>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container black-text">
                <Link href="//docs.msg-st.wildscript.tech/"><a className="styled-link" target="_blank" rel="noreferrer" title="API Documentation" aria-label="API Documentation"><b>API Documentation</b></a></Link> | <Link href="/privacy"><a className="styled-link" rel="noreferrer" title="Privacy Policy" aria-label="Privacy Policy"><b>Privacy Policy</b></a></Link> | &copy; <span id="footerYear">2020</span> <Link href="//msg-st.wildscript.tech/images/blank_render_logo.webp"><a className="styled-link" target="_blank" rel="noreferrer" title="Blank Render, Inc." aria-label="Blank Render, Inc."><b>Blank Render, Inc.</b></a></Link> All rights reserved.
                <a className="black-text right" href="#!"><b><i>Made with <i className="material-icons red-text heart-shadow">favorite</i>&emsp;for members of MSG</i></b></a>
            </div>
        </div>
    </footer >
);

export default Footer;