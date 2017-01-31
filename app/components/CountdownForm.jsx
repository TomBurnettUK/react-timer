import React from 'react';

class CountdownForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const strSeconds = this.refs.seconds.value;
        this.refs.seconds.value = '';
        
        if (strSeconds.match(/^[0-9]*$/)) {
            const seconds = parseInt(strSeconds, 10);
            if (seconds > 0) {
                this.props.onSetCountdown(seconds);
            }
        }
    }

    render() {
        return (
            <div>
                <form ref="form" className="countdown-form" onSubmit={this.onSubmit}>
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
}

CountdownForm.propTypes = {
    onSetCountdown: React.PropTypes.func
}

export default CountdownForm;