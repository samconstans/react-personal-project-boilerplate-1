import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Home from '../../components/Home';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Works from '../../components/Works';
import Contacts from '../../components/Contacts';
import Footer from '../../components/Footer';

export default class Feed extends Component {

    static contextTypes = {
        api:     PropTypes.string.isRequired,
        apirepo: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
        logo:    PropTypes.string.isRequired,
        twitter: PropTypes.string.isRequired
    };

    state = {
        isDataPersonLoading: false,
        loading:             'loading',
        person:              {},
        repos:               []
    };

    componentWillMount () {
        this.getDataPerson();
        this.getDataRepo();
    }

    getDataPerson = () => {
        fetch(this.context.api, {
            method: 'GET'
        })

            .then((result) => {
                if (result.status !== 200) {
                    throw new Error('Post was not loaded.');
                }

                return result.json();
            })

            .then((data) => {

                /*console.log(data)*/
                this.setState({
                    person: data
                });
            });

    };

    getDataRepo = () => {
        fetch(this.context.apirepo, {
            method: 'GET'
        })

            .then((result) => {
                if (result.status !== 200) {
                    throw new Error('Post was not loaded.');
                }

                return result.json();
            })

            .then((data) => {
                this.setState({
                    repos: data
                });
            });

    };

    render () {
        const { person, repos } = this.state;

        return (
            <section className = { Styles.feed }>
                <Header />
                <Home
                    avatar = { person.avatar_url }
                    name = { person.name }
                />
                <Skills />
                <Experience />
                <Works
                    repos = { repos }
                />
                <Contacts />
                <Footer />
            </section>
        );
    }
}
