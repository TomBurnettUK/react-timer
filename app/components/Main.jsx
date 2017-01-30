import React from 'react';

import Nav from 'Nav';

class Main extends React.Component {
    render () {
        return (
            <div>
                <Nav />
                <div className="row">
                    <div>
                        <p>Main.jsx</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    children: React.PropTypes.node
};

export default Main;