// Core
import React, { Component } from 'react';

// Instruments
import PropTypes from 'prop-types';
import Styles from './styles.scss';
import { getCurrentTime } from '../../helpers';
import logo from '../../theme/assets/vovk.png';
import Feed from '../../components/Feed';

export const options = {
    api:     'https://api.github.com/users/samconstans',
    apirepo: 'https://api.github.com/users/samconstans/repos',
    logo
};

export default class App extends Component {

    static childContextTypes = {
        api:     PropTypes.string.isRequired,
        apirepo: PropTypes.string.isRequired,
        avatar:  PropTypes.string.isRequired,
        logo:    PropTypes.string.isRequired
    };

    getChildContext () {
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
