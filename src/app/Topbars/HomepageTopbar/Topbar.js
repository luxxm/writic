import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import '../topbarStyling.css';
import './Topbar.css';
import ThemeContext from '../../theme-context';

function Topbar(props) {
    const context = useContext(ThemeContext);

    return(
        <div className={`topbar ${context}`} id="homepage-topbar">
            <FontAwesomeIcon icon={faPalette} size="3x" onClick={ () => props.themeFunc()} />
        </div>
    );
}

export default Topbar;