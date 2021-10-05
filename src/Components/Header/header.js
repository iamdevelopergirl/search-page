import './header.css';
import logo from '../../assets/Wunderflats logo.svg';
import './headerPosition.js';

function Header(){
    return(    
        <header id="app-header" className="header-container">
            <div className="blog-title">
                <img src={logo} className="app-logo" alt="logo" />
            </div>
            <div className="circle">
                <p className="inner-text">E</p>
            </div>
        </header>
    )
}

export default Header;