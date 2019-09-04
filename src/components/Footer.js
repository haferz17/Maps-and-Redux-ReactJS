import React, { Component } from 'react';
import './Style.css'

export default class Footer extends Component {
    render(){
        const { loading } = this.props
        return(
            <div className="Footer">
            {
                loading ? null :
                <div>
                    <a href="#"><img className="Icon" alt="fb" src={require('../assets/facebook-48.png')}/></a>
                    <a href="#"><img className="Icon" alt="twitter" src={require('../assets/twitter-48.png')}/></a>
                    <a href="#"><img className="Icon" alt="in" src={require('../assets/linkedin-48.png')}/></a>
                    <a href="#"><img className="Icon" alt="g+" src={require('../assets/google-plus-48.png')}/></a>
                    <a href="#"><img className="Icon" alt="ig" src={require('../assets/instagram-48.png')}/></a>
                </div>
            }
            </div>
        )
    }
}