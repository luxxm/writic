import React from 'react';
import ThemeContext from '../theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faAt } from '@fortawesome/free-solid-svg-icons';

import './Register.css'

function InputBox(props) {
    return(
        <div className="input-box">
            <FontAwesomeIcon icon={props.icon} size="3x" />
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    );
}

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    static contextType = ThemeContext;
    

    render() {
        return(
            <div id="register" className={this.context}>
                <div className="input-form">
                    <h1>REGISTER</h1>

                    <InputBox icon={faAt} type="email" placeholder="E-Mail" />
                    <InputBox icon={faUser} type="text" placeholder="Username" />
                    <InputBox icon={faKey} type="password" placeholder="Password" />

                    <button>SUBMIT</button>
                </div>
            </div>
        );
    }
}

export default Register;