import React, {Component} from 'react';

class Main extends Component {

    render() {
        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
                <p>Please click on Login button to continue</p>
                <a href="/secret">Login</a>
            </div>
        )
    }

}

export default Main;