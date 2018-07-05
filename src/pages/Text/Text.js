import React from "react";
import { render } from "react-dom";
const NameContext = React.createContext("Jack");;

class Hello extends React.PureComponent {
    render() {
        return (
            <NameContext.Consumer>
                {name => <h1>Hello *{name}* who come from the new Context API!</h1>}
            </NameContext.Consumer>
        );
    }
}
