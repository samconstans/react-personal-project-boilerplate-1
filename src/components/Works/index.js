import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';

export default class Works extends Component {

    static propTypes = {
        repos: PropTypes.array.isRequired
    };

    render () {
        const { repos } = this.props;

        const reposList = repos.map(({ id, name, html_url, language }) =>
            <li key = { id }>
                <a href = { html_url } target = '_blank'> { name } </a>
                <span>{language ? language : 'HTML' }</span>
            </li>
        );

        return (
            <section className = { Styles.works } id = 'works'>
                <h1>My works</h1>
                <ul className = { Styles.list }>
                    { reposList }
                </ul>
            </section>
        );
    }
}
