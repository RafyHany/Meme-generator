
import './Header.css';
import PropTypes from 'prop-types';
function Header(props) {
    return (
        <header>
            <img src={props.img} alt="pic" className='logo' />
            <h2>{props.address}</h2>
            <ul className="nav">
                <li>home</li>
                <li>menu</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </header>
    );
}
Header.propTypes = {
    img: PropTypes.string,
    address: PropTypes.string
}

export default Header;
