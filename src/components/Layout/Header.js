import React, {Component} from 'react';
import Dashboard from "../Dashboard";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <a className="navbar-brand" href="/dashboard">
                        ROSETTA SHOES
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"/>
                    </button>


                </div>

            </nav>

        );
    }
}

export default Header;