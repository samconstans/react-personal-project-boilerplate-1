import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';


export default class Header extends Component {

    static contextTypes = {
        logo: PropTypes.string.isRequired
    };

    render () {
        const {
            logo
        } = this.context;

        /*//header scroll stuff
       window.onscroll = function(e) {
           var nav = document.getElementsByClassName("header")[0],
               banner = document.getElementsByClassName("big-banner")[0], у меня нет такого класса ,я заливку сделала в css
               range = 70,
               scrollTop = document.body.scrollTop;

           if (scrollTop > range) {
               nav.classList.add("scrollNav");
               banner.classList.add("blurred");
           }
           else {
               nav.classList.remove("scrollNav");
               banner.classList.remove("blurred");
           }
       };*/

        return (
            <section className = { Styles.header } >
                <div className = { Styles.topBarLeft } >
                    <img src = { logo } />
                    <ul className = { Styles.menu } >
                        <li><a href = '#home' >Home</a></li>
                        <li><a href = '#skills' >Skills</a></li>
                        <li><a href = '#experience'>Experience</a></li>
                        <li><a href = '#works' >Works</a></li>
                        <li><a href = '#contacts' >Contacts</a></li>
                    </ul>
                    {/*{ toogle }*/}
                </div>

            </section>
        );
    }
}
