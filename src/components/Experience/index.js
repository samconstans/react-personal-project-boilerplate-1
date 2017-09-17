import React, { Component } from 'react';
import Styles from './styles.scss';

export default class Expierience extends Component {
    render () {

        return (
            <section className = { Styles.experience } id = 'experience'>
                <h1>Experience</h1>
                <div className = { Styles.list }>
                    <ul>
                        <li>Lectrum LLC 08.2017 - 09.2017</li>
                        <li>I made 2 React homeworks while taking a React course at Lectrum LLC.
                                I used external API in these homeworks
                        </li>
                    </ul>
                    <ul>
                        <li>Women Who Code Kyiv 03.2017 - 07.2017</li>
                        <li>I made 4 Python homeworks while taking a course at edx with Women WCode Kyiv
                        </li>
                    </ul>
                    <ul>
                        <li>GoIT | Front end developer:<br />02.2016 - 07.2016</li>
                        <li>I made 32 HTML and JS homeworks while taking a course at GoIT.
                            I learned how to create adaptive mobile-friendly landing pages.
                            I used media queries to make them responsive.
                        </li>
                    </ul>
                    <ul>
                        <li>Ukrainian oil and gas company (Kiev, Ukraine)<br />(03.2012 – 06.2013)</li>
                        <li>Specialist in Management Accounting
                            <ul className = { Styles.listOil }>
                                <li>
                                    updated accounting registers,test results management system implementation
                                    to operation and control of execution;
                                </li>
                                <li>participated in the development and implementation of the system
                                    on the basis of management accounting 1C8.1;
                                </li>
                                <li>systematization in management accounting system 1C v.8.1;</li>
                                <li>maintaining financial results in areas of the organization at
                                    the request of a shareholder of the company.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
