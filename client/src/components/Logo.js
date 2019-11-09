import React, {Component} from 'react';
import logo from "../img/logo.svg"

class Logo extends Component {
    render() {
        return (
            <div>
                <img className={"logo"} src={logo} alt={"logo"} width={"300px"}/>
            </div>
        );
    }
}

export default Logo;