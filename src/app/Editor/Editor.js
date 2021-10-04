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
            <input type={props.inpType} defaultValue={props.defaultValue} onChange={ (change) => props.changeValue(props.assignedFunc, change.target.value) } />
            <FontAwesomeIcon icon={faSortDown} size="3x" />
        </div>
    );
}

function ListItem(props) {
    return(
        <div class="editor-sidebar-item">
            <FontAwesomeIcon icon={props.icon} size="3x" />
            <SelectionBox inpType="text" defaultValue={props.defaultValue} assignedFunc={props.assignedFunc} changeValue={props.changeValue} />
        </div>
    );
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(value, newValue) {
        if (value === "fontSize" || value === "fontSpacing")
            newValue = parseInt(newValue);

        this.props.values[value] = newValue;

        this.props.changeFunc(this.props.values);
    }

    render() {
        return(
            <div id="editor-sidebar">
                <h1>TEXT</h1>

                <ListItem icon={faFont} defaultValue={this.props.values.font} assignedFunc={"font"} changeValue={this.changeValue} />
                <ListItem icon={faTextHeight} defaultValue={this.props.values.fontSize} assignedFunc={"fontSize"} changeValue={this.changeValue} />
                <ListItem icon={faTextWidth} defaultValue={this.props.values.fontSpacing} assignedFunc={"fontSpacing"} changeValue={this.changeValue} />

                <div class="editor-sidebar-functions">
                    <FontAwesomeIcon icon={faBold} size="3x" />
                    <FontAwesomeIcon icon={faItalic} size="3x" />
                    <FontAwesomeIcon icon={faUnderline} size="3x" />
                    <FontAwesomeIcon icon={faStrikethrough} size="3x" />
                </div>

                <ListItem icon={faTint} defaultValue={this.props.values.color} assignedFunc={"color"} changeValue={this.changeValue} />
                <ListItem icon={faFill} defaultValue={this.props.values.bgColor} assignedFunc={"bgColor"} changeValue={this.changeValue} />

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
}

function Paper(props) {
    return(
        <div id="editor-paper">
            <p style={{fontFamily: props.values.font, fontSize: props.values.fontSize, letterSpacing: props.values.fontSpacing, color: props.values.color, backgroundColor: props.values.bgColor}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Sapien nec sagittis aliquam malesuada. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. A scelerisque purus semper eget duis. In nibh mauris cursus mattis molestie a iaculis. Elementum nisi quis eleifend quam. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Vitae purus faucibus ornare suspendisse sed. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Elit eget gravida cum sociis natoque penatibus et magnis dis. Tortor dignissim convallis aenean et. Adipiscing bibendum est ultricies integer quis auctor. Eu feugiat pretium nibh ipsum consequat nisl vel pretium.

Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Volutpat odio facilisis mauris sit amet. Et malesuada fames ac turpis egestas sed tempus urna. Commodo elit at imperdiet dui. Nisl nisi scelerisque eu ultrices vitae. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Volutpat consequat mauris nunc congue nisi vitae suscipit. Tempor id eu nisl nunc. Semper auctor neque vitae tempus. Nec tincidunt praesent semper feugiat. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Habitasse platea dictumst vestibulum rhoncus est. Eu feugiat pretium nibh ipsum consequat nisl. Ornare arcu odio ut sem nulla pharetra diam sit. Duis ut diam quam nulla. Diam quam nulla porttitor massa id.
            </p>
        </div>
    );
}

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.changeState = this.changeState.bind(this);

        this.state = {
            values: {
                font: "Noto Sans", //String
                fontSize: 12, //Pixels
                fontSpacing: 10, //Percentage
                color: "#FFFFFF", //Hex (string)
                bgColor: "#FFFFFF00", //Hex with alpha (string)

            }
        }
    }
    static contextType = ThemeContext;

    changeState(newValues) {
        this.setState({values: newValues})
    }

    render() {
        return(
            <div id="editor" class={this.context}>
                <Sidebar values={this.state.values} changeFunc={this.changeState} />
                <Paper values={this.state.values} />
            </div>
        );
    }
}

export default Editor;