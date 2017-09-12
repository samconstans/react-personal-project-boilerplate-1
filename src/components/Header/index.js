import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Works from '../../components/Works';
import Contacts from '../../components/Contacts';


export default class Header extends Component {

    static contextTypes = {
        logo: PropTypes.string.isRequired
    };

    static propTypes = {
        content: PropTypes.object.isRequired,
        setContentHeaders: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = {
            items: [{
                val: 'Skills',
                component: <Skills/>
            }, {
                val: 'Experience',
                component: <Experience/>
            }, {
                val: 'Works',
                component: <Works/>
            }, {
                val: 'Contacts',
                component: <Contacts/>
            }]
        }

        this.handleSkillsAppear = ::this._handleSkillsAppear;
        this.handleSkillsDisappear = ::this._handleSkillsDisappear;
    };

    // Transitions

    _handleSkillsAppear = () => {
        const { items } = this.state.items;
        this.setState({items: items});

        TweenMax.fromTo(
            skills,
            0.5,
            { x: -1000 },
            { x: 0 }
        );
    };

    _handleSkillsDisappear = () => {
        const { skills } = this.skills;

        TweenMax.fromTo(
            skills,
            0.5,
            { x: 0 },
            { x: 1000 }
        );
    };

    /*handleExperienceAppear = () => {
        const { expierience } = this.experience;

        TweenMax.fromTo(
            expierience,
            0.5,
            { x: -1000 },
            { x: 0 }
        );
    };

    handleExperienceDisappear = () => {
        const { expierience } = this.experience;

        TweenMax.fromTo(
            expierience,
            0.5,
            { x: 0 },
            { x: -1000 }
        );
    };

    handleWorksAppear = () => {
        const { works } = this.works;

        TweenMax.fromTo(
            works,
            0.5,
            { x: -1000 },
            { x: 0 }
        );
    };

    handleWorksDisappear = () => {
        const { works } = this.works;

        TweenMax.fromTo(
            works,
            0.5,
            { x: 0 },
            { x: -1000 }
        );
    };

    handleContactsAppear = () => {
        const { contacts } = this.contacts;

        TweenMax.fromTo(
            contacts,
            0.5,
            { x: -1000 },
            { x: 0 }
        );
    };

    handleContactsDisappear = () => {
        const { contacts } = this.contacts;

        TweenMax.fromTo(
            contacts,
            0.5,
            { x: 0 },
            { x: -1000 }
        );
    };
*/
    render () {
        const { logo } = this.context;
       /* const { page } = this.state;*/

        const items = this.state.items.map((item, i) => (
            <div key = { item } onClick = {() => this._handleSkillsDisappear(i)}>
                { item }
            </div>
        ));

        /*const skillsList = page === 'skills' ? (
            <Transition
                appear
                in
                timeout = { 500 }
                onEnter = { this.handleSkillsAppear }
                onExit = { this.handleSkillsDisappear } >
                <div ref = { (skills) => this.skillsList = skills } >
                    <Skills />
                </div>
            </Transition>
        ) : null;

        const experienceList = page === 'expierience' ? (
            <Transition
                appear
                in
                timeout = { 500 }
                onEnter = { this.handleExperienceAppear }
                onExit = { this.handleExperienceDisappear } >
                <div ref = { (experience) => this.experienceList = experience }>
                    <Experience />
                </div>
            </Transition>
        ) : null;

        const worksList = page === 'works' ? (
            <Transition
                appear
                in
                timeout = { 500 }
                onEnter = { this.handleWorksAppear }
                onExit = { this.handleWorksDisappear } >
                <div ref = { (works) => this.worksList = works }>
                    <Works
                        repos = { repos }
                    />
                </div>
            </Transition>
        ) : null;

        const contactsList = page === 'contacts' ? (
            <Transition
                appear
                in
                timeout = { 500 }
                onEnter = { this.handleContactsAppear }
                onExit = { this.handleContactsDisappear } >
                <div ref = { (contacts) => this.contactsList = contacts }>
                    <Contacts />
                </div>
            </Transition>
        ) : null;*/

        return (
            <section className = { Styles.header } >
                <img src = { logo } />
                <div className = { Styles.topBarLeft } >
                    <button onClick = { items }>Skills</button>
{/*
                    { skillsList }
                    { experienceList }
                    { worksList }
                    { contactsList }*/}


                    {/*<ul className = { Styles.menu } >
                        <li><a href = '#home' >Home</a></li>
                        <li><a href = '#skills' >Skills</a></li>
                        <li><a href = '#experience'>Experience</a></li>
                        <li><a href = '#works' >Works</a></li>
                        <li><a href = '#contacts' >Contacts</a></li>
                    </ul>*/}
                </div>

            </section>
        );
    }
}
