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
                <button className="loginButtons">LOGIN</button>
                <button className="loginButtons">REGISTER</button>
            </div>
        </div>
    );
}

export default HomepageTopbar;