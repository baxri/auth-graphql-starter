import React, { Component } from 'react'
import Header from "./Header";

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <Header />
                {this.props.children}
            </div>
        )
    }
}
