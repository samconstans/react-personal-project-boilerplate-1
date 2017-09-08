import React, { Component } from 'react';
import Styles from './styles.scss';

export default class Skills extends Component {
    render () {

        return (
            <section className = { Styles.skills } id = 'skills'>
                <h1>Technical Skills</h1>
                <div className={Styles.list}>
                    <ul>
                        <li>Technologies:</li>
                        <li>HTML, CSS, Flexbox, SASS, Adaptive design</li>
                    </ul>
                    <ul>
                        <li>Related technologies:</li>
                        <li>Basics of Photoshop for coder, graphic optimization, retina support</li>
                    </ul>
                    <ul>
                        <li>Methodology:</li>
                        <li>BEM</li>
                    </ul>
                    <ul>
                        <li>Frameworks / Libraries:</li>
                        <li>jQuery, React.js, Angular 2 on basic level</li>
                    </ul>
                    <ul>
                        <li>Version Control Systems:</li>
                        <li>GIT</li>
                    </ul>
                    <ul>
                        <li>Programming languages:</li>
                        <li>Javascript, ES2015-ES 2017</li>
                    </ul>
                    <ul>
                        <li>Build tools:</li>
                        <li>Gulp,  webpack</li>
                    </ul>
                    <ul>
                        <li>Extras:</li>
                        <li>Command line on basic level, NPM, Yarn, VIM, Chrome dev tools</li>
                    </ul>
                </div>
            </section>
        );
    }
}
