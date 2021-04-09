import React from 'react';
import ThemeContext from '../theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faLock, faFingerprint } from '@fortawesome/free-solid-svg-icons';

import './Homepage.css';

function Card(props) {
    return(
        <div className="homepage-card">
            <FontAwesomeIcon icon={props.icon} size="3x" />
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    );
}

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }
    static contextType = ThemeContext;

    getImage() {
        switch (this.context) {
            case 'light':
                return 'logos/logo-trnsp-dark2048.png';
            default:
                return 'logos/logo-trnsp2048.png';
        }
    }

    render() {
        return(
            <div id="homepage" class={this.context}>
                <div id="homepage-head">
                    <img src={this.getImage()} />
                    <h1>Simple, easy, intuitive note editor</h1>
                    <FontAwesomeIcon icon={faChevronDown} id="arrow-down" size="2x" />
                </div>
                <div id="homepage-body">
                    <div id="homepage-design">
                        <div>
                            <h2>DESIGN</h2>
                            <p>Writic's design is simple and easy to use. The UI is ergonomic and designed to increase concentration, so you don't waste time where you don't need to.</p>
                        </div>
                        <img src="" alt=""/>
                    </div>

                    <div id="homepage-privacy">
                        <h1>PRIVACY</h1>
                        <div id="homepage-privay-card-holder">
                            <Card icon={faLock} title="PRIVATE">All of your notes are only accessible by your account. We do not share <b>any</b> collected data.</Card>
                            <Card icon={faFingerprint} title="ENCRYPTED">All notes & passwords on our servers are encrypted with the SHA-256 encryption algorithm. Encryption makes your data private, even in the case of a server breach.</Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Homepage;