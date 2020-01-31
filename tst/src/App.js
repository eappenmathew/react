import React, { Component } from 'react';



//class RegularClass{}

class App extends Component{
    constructor(){
        super();
        this.state = { displayBio: true };
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
                    <p>qwerty</p>
                    <p>coding</p>
                </div>
                    ) : null
                }
            </div>
        )
    }
}

export default App;