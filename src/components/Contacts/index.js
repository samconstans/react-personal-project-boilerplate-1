import React, { Component } from 'react';
import Styles from './styles.scss';

export default class Contacts extends Component {

    render () {

        return (
            <section className = { Styles.contacts } id = 'contacts'>
                <a href = 'https://goo.gl/WsiEh7' target = '_blank' >Contact me </a> {/*// eslint-disable-line*/}
                <a href = 'https://github.com/samconstans/react-personal-project-boilerplate-1/CV_Vovk_Anastasiya_FE.pdf' rel = 'noopener noreferrer' target = '_blank' >Download CV</a>
            </section>
        );
    }
}
