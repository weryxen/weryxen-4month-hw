import React, {Component} from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {p: false}
    }

    btnClick = ( ) => {
        this.setState({p: !this.state.p})
    }
    render() {
        return (
            <>

                {this.state.p && <p>текст</p>}
                <button onClick={this.btnClick}>Click</button>
            </>
        );
    }
}

export default AboutUs;