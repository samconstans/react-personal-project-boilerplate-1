import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';


export default class Header extends Component {

    static contextTypes = {
        logo: PropTypes.string.isRequired
    };

    render () {
        const { logo } = this.context;

        return (
            <section className = { Styles.header } >
                <img src = { logo } />
                <div className = { Styles.topBarLeft } >
                    <ul className = { Styles.menu } >
                        <li><a href = '#home' >Home</a></li>
                        <li><a href = '#skills' >Skills</a></li>
                        <li><a href = '#experience'>Experience</a></li>
                        <li><a href = '#works' >Works</a></li>
                        <li><a href = '#contacts' >Contacts</a></li>
                    </ul>
                </div>

            </section>
        );
    }
}
