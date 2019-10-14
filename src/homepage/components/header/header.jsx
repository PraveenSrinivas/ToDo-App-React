import React, { Component } from 'react'

class HeaderComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <a href="/" className="navbar-brand">
                    ToDo App
                </a>
            </nav>
        )
    }
}

export default HeaderComponent
