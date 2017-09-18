import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';


export default class Header extends Component {

    static contextTypes = {
        logo: PropTypes.string.isRequired
    };

    static propTypes = {
        handleComponentSwitch: PropTypes.func.isRequired
    };

    handleComponentSwitch = (component) => {
        this.props.handleComponentSwitch(component);
    };

    render () {
        const { logo } = this.context;

        return (
            <section className = { Styles.header }>
                <img src = { logo } />
                <div className = { Styles.topBarLeft } >
                    <ul className = { Styles.menu } >
                        <li>
                            <a
                                href = '#home'
                                onClick = { () => this.handleComponentSwitch('home') }>
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href = '#skills'
                                onClick = { () => this.handleComponentSwitch('skills') }>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href = '#courses'
                                onClick = { () => this.handleComponentSwitch('courses') }>
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href = '#experience'
                                onClick = { () => this.handleComponentSwitch('experience') }>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                href = '#works'
                                onClick = { () => this.handleComponentSwitch('works') }>
                                Works
                            </a>
                        </li>
                        <li>
                            <a
                                href = '#contacts'
                                onClick = { () => this.handleComponentSwitch('contacts') }>
                                Contacts
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
