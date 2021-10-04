import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import '../topbarStyling.css';
import './EditorTopbar.css'
import ThemeContext from '../../theme-context';

function EditorTopbar(props) {
    const context = useContext(ThemeContext);

    return(
        <div className={`topbar ${context}`} id="editor-topbar">
            <FontAwesomeIcon className="themeChanger" icon={faPalette} size="3x" onClick={ () => props.themeFunc() } />
        </div>
    );
}

export default EditorTopbar;