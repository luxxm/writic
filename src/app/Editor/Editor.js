import React from 'react';
import ThemeContext from '../theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFont,
    faTextHeight,
    faTextWidth,
    faBold,
    faItalic,
    faUnderline,
    faStrikethrough,
    faTint,
    faFill,
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faAdjust,
    faSortDown
} from '@fortawesome/free-solid-svg-icons';

import './Editor.css';

function SelectionBox(props) {
    return(
        <div class="editor-selection-box">
            <input type={props.inpType} />
            <FontAwesomeIcon icon={faSortDown} size="3x" />
        </div>
    );
}

function ListItem(props) {
    return(
        <div class="editor-sidebar-item">
            <FontAwesomeIcon icon={props.icon} size="3x" />
            <SelectionBox />
        </div>
    );
}

function Sidebar(props) {
    return(
        <div id="editor-sidebar">
            <h1>TEXT</h1>

            <ListItem icon={faFont} />
            <ListItem icon={faTextHeight} />
            <ListItem icon={faTextWidth} />

            <div class="editor-sidebar-functions">
                <FontAwesomeIcon icon={faBold} size="3x" />
                <FontAwesomeIcon icon={faItalic} size="3x" />
                <FontAwesomeIcon icon={faUnderline} size="3x" />
                <FontAwesomeIcon icon={faStrikethrough} size="3x" />
            </div>

            <ListItem icon={faTint} />
            <ListItem icon={faFill} />

            <div class="editor-sidebar-functions">
                <FontAwesomeIcon icon={faAlignLeft} size="3x" />
                <FontAwesomeIcon icon={faAlignCenter} size="3x" />
                <FontAwesomeIcon icon={faAlignRight} size="3x" />
            </div>

            <h1>PAPER</h1>

            <ListItem icon={faFill} />
            <ListItem icon={faAdjust} />
        </div>
    );
}

function Paper(props) {
    return(
        <div id="editor-paper">

        </div>
    );
}

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }
    static contextType = ThemeContext;

    render() {
        return(
            <div id="editor" class={this.context}>
                <Sidebar />
                <Paper />
            </div>
        );
    }
}

export default Editor;