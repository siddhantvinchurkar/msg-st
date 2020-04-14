import Link from 'next/link';

const Header = () => (
    <nav className="z-depth-5">
        <div className="nav-wrapper">
            <Link href=""><a rel="noreferrer" title="MSG Speed Test" aria-label="MSG Speed Test" className="brand-logo center"><i className="black-text material-icons header-logo">all_inclusive</i></a></Link>
        </div>
        <div id="prg-2" className="progress z-depth-5">
            <div id="progress-bar-2" className="determinate"></div>
        </div>
    </nav>
);

export default Header;