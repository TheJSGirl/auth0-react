import React, {Component} from 'react';
import Auth0 from '../../Auth';

class Callback extends Component {

    componentDidMount() {
        const auth = new Auth0();
        auth.handleAuthentication();
        
    }

    render(){
        return(
            <div>
                Loading...
                <h2>Hello to Callback Page</h2>
            </div>
        )
    }
}

export default Callback;