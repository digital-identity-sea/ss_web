import * as React from 'react';
/**
 * @extends {React.Component<HeaderToolbarProps>}
 */
class HeaderToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container-fluid p-3 d-flex flex-row">
                <div className="ff-mono flex-grow-1" style={{ fontSize: '2em' }}>
                    {this.props.title}
                </div>
                <div>
                    <a href="/">Home</a>
                    <span className="p-2" />
                    <a href="/login">Login</a>
                </div>
            </div>
        );
    }
}
export default HeaderToolbar;
/**
 * @typedef HeaderToolbarProps
 * @property {string} [title]
 */
