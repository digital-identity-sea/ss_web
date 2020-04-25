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
            <div className="container-fluid p-3">
                <div className="ff-mono" style={{ fontSize: '2em' }}>
                    {this.props.title}
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
