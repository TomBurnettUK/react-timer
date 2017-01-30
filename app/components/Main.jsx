import React from 'react';

import Nav from 'Nav';

class Main extends React.Component {
    render () {
        return (
            <div>
                <Nav />
                <div className="row">
                    <div className="column small-centered medium-6 large-4">
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