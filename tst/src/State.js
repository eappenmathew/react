import React, { Component } from 'react';



//class RegularClass{}

class App extends Component{
    state = {displayBio: false};
    /*constructor(){
        super();
        this.state = { displayBio: false };

        console.log('Component this', this);

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
       
    } */


toggleDisplayBio = () => {
    this.setState(
        { displayBio: !this.state.displayBio })
    
}


    render(){



        return(
            <div>
                <h1>Hello</h1>
                <p>My name is allen</p>
                {
                this.state.displayBio ? (
                <div>
                    <p>I live in india</p>
                    <p>just for fun</p>
                    <p>coding</p>
                    <button onClick = {this.toggleDisplayBio}>Show less</button>
                </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}> Read more </button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default App;