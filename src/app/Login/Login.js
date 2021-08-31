import React from 'react';
import ThemeContext from '../theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faAt, faKey } from '@fortawesome/free-solid-svg-icons';

import './Login.css';

function InputBox(props) {
    return(
        <div ref={props.pRef} className="input-box">
            <FontAwesomeIcon icon={props.icon} size="3x" />
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    );
}

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.email = React.createRef()
        this.password = React.createRef()
    }
    static contextType = ThemeContext;

    POST() {
        var eml = this.email.current.childNodes[1].value;
        var pswd = this.password.current.childNodes[1].value;

        const params = {
            Email: eml,
            Password: pswd,
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };

        fetch("http://localhost:8000/", options);
    }

    render() {
        return(
            <div id="login" className={this.context}>
                <div className="input-form">
                    <h1>LOGIN</h1>

                    <InputBox pRef={this.email} icon={faAt} type="email" placeholder="E-Mail" />
                    <InputBox pRef={this.password} icon={faKey} type="password" placeholder="Password" />

                    <button onClick={() => this.POST()}>SUBMIT</button>
                </div>
            </div>
        );
    }
}

export default Login;