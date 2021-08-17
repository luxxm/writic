import React from 'react';
import ThemeContext from '../theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

import './Login.css';

function InputBox(props) {
    return(
        <div className="input-box">
            <FontAwesomeIcon icon={props.icon} size="3x" />
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    );
}

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    static contextType = ThemeContext;


    render() {
        return(
            <div id="login" className={this.context}>
                <div className="input-form">
                    <h1>LOGIN</h1>

                    <InputBox icon={faUser} type="text" placeholder="Username" />
                    <InputBox icon={faKey} type="password" placeholder="Password" />

                    <button>SUBMIT</button>
                </div>
            </div>
        );
    }
}

export default Login;