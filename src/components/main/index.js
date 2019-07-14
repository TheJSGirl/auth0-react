import React, {Component} from 'react';

class Main extends Component {

    render() {
        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
                <p>Please click on Login button to continue</p>
                <a href="/secret">To see secret area do login</a>
                {this.props.auth.isAuthenticate() &&
                <div>
                Please Login first
                <button onClick={this.props.auth.login}>Login</button>
            </div>
                }
            </div>
        )
    }

}

export default Main;