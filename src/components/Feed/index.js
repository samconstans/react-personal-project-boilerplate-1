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
import TweenMax from 'gsap';
import { Transition } from 'react-transition-group';


export default class Feed extends Component {

    static contextTypes = {
        api:      PropTypes.string.isRequired,
        apirepo:  PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
        logo:     PropTypes.string.isRequired,
        twitter:  PropTypes.string.isRequired
    };

    state = {
        isDataPersonLoading: false,
        loading:             'loading',
        person:              {},
        page:                'main',
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


    // Transitions

    handleComponentSwitch = (component) => {
        this.setState({
            page: component
        });
    };

    handleHomeDisappear = () => {
        <div ref = { (home) => this.home = home }>
            <Home avatar = { person.avatar_url } name = { person.name } />
        </div>;

        TweenMax.fromTo(
            home,
            0.7,
            { x: 0 },
            { x: -1000 }
        );
    };

    handleSkillsAppear = () => {
        <div ref = { (skills) => this.skills = skills }>
            <Skills />
        </div>;

        TweenMax.fromTo(
            skills,
            0.7,
            { x: -1000 },
            { x: 0 }
        );
    };

    handleSkillsDisappear = () => {
        <div ref = { (skills) => this.skills = skills }>
            <Skills />
        </div>;

        TweenMax.fromTo(
            skills,
            0.7,
            { x: 0 },
            { x: 1000 }
        );
    };

    handleExperienceAppear = () => {
        <div ref = { (experience) => this.expierience = experience }>
            <Skills />
        </div>;

        TweenMax.fromTo(
            experience,
            0.7,
            { x: -1000 },
            { x: 0 }
        );
    };

    handleExperienceDisappear = () => {
        <div ref = { (experience) => this.expierience = experience }>
            <Experience />
        </div>;

        TweenMax.fromTo(
            expierience,
            0.7,
            { x: 0 },
            { x: 1000 }
        );
    };

    handleWorksAppear = () => {
        <div ref = { (works) => this.works = works }>
            <Works />
        </div>;

        TweenMax.fromTo(
            works,
            0.7,
            { x: -1000 },
            { x: 0 }
        );
    };

    handleWorksDisappear = () => {
        <div ref = { (works) => this.works = works }>
            <Works />
        </div>;

        TweenMax.fromTo(
            works,
            0.7,
            { x: 0 },
            { x: 1000 },
            { ease: Back.easeOut }
        );
    };

    handleContactsAppear = () => {
        <div ref = { (contacts) => this.contacts = contacts }>
            <Contacts />
        </div>;

        TweenMax.fromTo(
            contacts,
            0.7,
            { x: -1000 },
            { x: 0 }
        );
    };

    handleContactsDisappear = () => {
        <div ref = { (contacts) => this.contacts = contacts }>
            <Contacts />
        </div>;

        TweenMax.fromTo(
            contacts,
            0.7,
            { x: 0 },
            { x: 1000 },
            { ease: Back.easeOut }
        );
    };

    render () {
        const { page, person, repos } = this.state;

        const skillsList =
            page === 'skills' ? (
                <Transition
                    appear
                    in
                    timeout = { 700 }
                    onEnter = { this.handleSkillsAppear }
                    onExit = { this.handleSkillsDisappear } >
                    <div ref = { (skills) => this.skillsList = skills } >
                        <Skills />
                    </div>
                </Transition>
            ) : null;

        const experienceList =
            page === 'experience' ? (
                <Transition
                    appear
                    in
                    timeout = { 700 }
                    onEnter = { this.handleExperienceAppear }
                    onExit = { this.handleExperienceDisappear } >
                    <div ref = { (experience) => this.experienceList = experience }>
                        <Experience />
                    </div>
                </Transition>
            ) : null;

        const worksList =
            page === 'works' ? (
                <Transition
                    appear
                    in
                    timeout = { 700 }
                    onEnter = { this.handleWorksAppear }
                    onExit = { this.handleWorksDisappear } >
                    <div ref = { (works) => this.worksList = works }>
                        <Works
                            repos = { repos }
                        />
                    </div>
                </Transition>
            ) : null;

        const contactsList =
            page === 'contacts' ? (
                <Transition
                    appear
                    in
                    timeout = { 700 }
                    onEnter = { this.handleContactsAppear }
                    onExit = { this.handleContactsDisappear } >
                    <div ref = { (contacts) => this.contactsList = contacts }>
                        <Contacts />
                    </div>
                </Transition>
            ) : null;

        return (
            <section className = { Styles.feed }>
                <Header handleComponentSwitch = { this.handleComponentSwitch } />
                <Home avatar = { person.avatar_url } name = { person.name } />
                { skillsList }
                { experienceList }
                { worksList }
                { contactsList }
                <Footer />
            </section>
        );
    }
}
