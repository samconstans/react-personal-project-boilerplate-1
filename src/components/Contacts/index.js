import React, { Component } from 'react';
import Styles from './styles.scss';

export default class Contacts extends Component {

    render () {

        return (
            <section className = { Styles.contacts } id = 'contacts'>
                <a href = 'https://goo.gl/WsiEh7' target = '_blank' >Contact me </a>
                <a href = 'https://goo.gl/jzzPGd' rel = 'noopener noreferrer' target = '_blank' >Download CV</a>
            </section>
        );
    }
}
