import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import '../topbarStyling.css';
import './HomepageTopbar.css';
import ThemeContext from '../../theme-context';
import { Link } from 'react-router-dom';

function HomepageTopbar(props) {
    const context = useContext(ThemeContext);

    return(
        <div className={`topbar ${context}`} id="homepage-topbar">
            <FontAwesomeIcon className="themeChanger" icon={faPalette} size="3x" onClick={ () => props.themeFunc() } />
            <div>
                <Link to="/login" style={{all:"unset"}}><button className="loginButtons">LOGIN</button></Link>
                <Link to="/register" style={{all:"unset"}}><button className="loginButtons">REGISTER</button></Link>
            </div>
        </div>
    );
}

export default HomepageTopbar;