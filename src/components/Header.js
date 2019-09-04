import React, { Component } from 'react';
import './Style.css'

export default class Header extends Component {
    render(){
        const { users, loading } = this.props
        return(
            <div className="Header">
                <div className="Top"/>
                <div className="Nav">
                {
                    loading ? null :    
                    <div className="Navbar">
                        <div className="Name">
                            <p className="User-name">{users&&users.name.first} {users&&users.name.last}</p>
                        </div>
                        <div className="Menu">
                            <ul>
                                <li>ABOUT</li>
                                <li>RESUME</li>
                                <li>EDUCATION</li>
                                <li>PORTOFOLIO</li>
                            </ul>
                        </div>
                    </div>
                }
                </div>
            </div>
        )
    }
}