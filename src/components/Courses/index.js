import React, { Component } from 'react';
import Styles from './styles.scss';

export default class Courses extends Component {
    render () {
        return (
            <section className = { Styles.courses }>
                <h1>Training courses</h1>
                <div className = { Styles.list }>
                    <ul>
                        <li>CyberBionic JS Advanced <br />05.2017 </li>
                        <li>JavaScript I became more confident in my knowledge: prototypes,
                            Object window, regular expressions, events and event handling,
                            forms and elements of form, cookies and data storage on the client side,
                            Ajax and  HTTP protocols
                        </li>
                    </ul>
                    <ul>
                        <li>GoIT | Front end developer:<br />02.2016 - 07.2016</li>
                        <li>I learned how to create addaptive mobile-friendly landing pages.
                            I used media queries to make them responsive.
                        </li>
                    </ul>
                    <ul>
                        <li>WebAcademy<br />11.2015</li>
                        <li>
                            Python/Django development for beginners
                        </li>
                    </ul>
                </div>
                <h1>Education</h1>
                <div className = { Styles.list }>
                    <ul>
                        <li>2003 - 2008</li>
                        <li>THE NATIONAL ACADEMY OF ENVIRONMENTAL
                            PROTECTION AND RESORT DEVELOPMENT (Simferopol, Ukraine),
                            Specialist Degree in Economic Cybernetics
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
