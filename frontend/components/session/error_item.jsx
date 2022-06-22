import React from "react";

class ErrorItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="error-messages">
                {this.props.error}
            </li>
        )
    }
}

export default ErrorItem;