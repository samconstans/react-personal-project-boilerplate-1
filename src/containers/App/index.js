// Core
import React, { Component } from 'react';

// Instruments
import PropTypes from 'prop-types';
import Styles from './styles.scss';
import logo from '../../theme/assets/vovk.png';
import Feed from '../../components/Feed';

export const options = {
    api:        'https://api.github.com/users/samconstans',
    apirepo:    'https://api.github.com/users/samconstans/repos',
    facebook:   'https://www.facebook.com/anastasia.vovk',
    googlePlus: 'https://plus.google.com/u/0/102345458595341567965',
    linkedin:   'https://www.linkedin.com/in/anastasiia-vovk-03159b44/',
    logo,
    twitter:    'https://twitter.com/NaWtusya'
};

export default class App extends Component {

    static childContextTypes = {
        api:        PropTypes.string.isRequired,
        apirepo:    PropTypes.string.isRequired,
        facebook:   PropTypes.string.isRequired,
        googlePlus: PropTypes.string.isRequired,
        linkedin:   PropTypes.string.isRequired,
        logo:       PropTypes.string.isRequired,
        twitter:    PropTypes.string.isRequired
    };

    static getChildContext () {
        return options;
    }

    render () {
        return (
            <section className = { Styles.app }>
                <Feed />
            </section>
        );
    }
}
