import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import '../topbarStyling.css';
import './HomepageTopbar.css';
import ThemeContext from '../../theme-context';

function HomepageTopbar(props) {
    const context = useContext(ThemeContext);

    return(
        <div className={`topbar ${context}`} id="homepage-topbar">
            <FontAwesomeIcon className="themeChanger" icon={faPalette} size="3x" onClick={ () => props.themeFunc() } />
            <div>
                <button onClick={() => window.location = "http://localhost:3000/login"} className="loginButtons">LOGIN</button>
                <button onClick={() => window.location = "http://localhost:3000/register"} className="loginButtons">REGISTER</button>
            </div>
        </div>
    );
}

export default HomepageTopbar;