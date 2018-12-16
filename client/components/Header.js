import React, { Component } from 'react'
import query from "../queries/CurrentUser";
import mutation from "../mutations/Logout";
import { graphql } from "react-apollo";
import { Link } from "react-router";


class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    onLogoutClick() {
        this.props.mutate({
            refetchQueries: [{ query: query }]
        });
    }

    renderButtons() {

        const { user, loading } = this.props.data;

        if (loading) { return <div></div>; }

        if (user) {
            return (
                <li>
                    <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
                </li>
            );
        } else {
            return (
                <div>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </div>
            )
        }
    }

    render() {

        console.log(this.props.data)

        return (
            <nav>
                <div className="naw-wrapper"></div>
                <Link to="/" className="brand-logo left" >
                    Home
                </Link>
                <ul className="right">
                    {this.renderButtons()}
                </ul>
            </nav>
        )
    }
}

export default graphql(mutation)(
    graphql(query)(Header)
);
