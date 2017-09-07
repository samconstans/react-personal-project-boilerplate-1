import React, { Component } from 'react';
import Styles from './styles.scss';

export default class Skills extends Component {
    render () {

        return (
            <section className = { Styles.skills } id = 'skills'>
                <h1>Technical Skills</h1>
                <div className={Styles.list}>
                    <div className={Styles.right}>
                        <ul>
                            <li>Technologies:</li>
                            <li>Related technologies:</li>
                            <li>Methodology:</li>
                            <li>Frameworks/Libraries:</li>
                            <li>Version Control Systems:</li>
                            <li>Programming languages:</li>
                            <li>Build tools:</li>
                            <li>Extras:</li>
                        </ul>
                    </div>
                    <div className={Styles.left}>
                        <ul>
                            <li>HTML, CSS, Flexbox, SASS, Adaptive design</li>
                            <li>Basics of Photoshop for coder, graphic optimization, retina support</li>
                            <li>BEM</li>
                            <li>jQuery, React.js, Angular 2 on basic level</li>
                            <li>GIT</li>
                            <li>Javascript, ES2015-ES 2017</li>
                            <li>Gulp,  webpack</li>
                            <li>Command line on basic level, NPM, Yarn, VIM, Chrome dev tools</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
