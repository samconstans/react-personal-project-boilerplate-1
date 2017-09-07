import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';

export default class Home extends Component {
    static propTypes = {
        avatar:   PropTypes.string.isRequired,
        name:     PropTypes.string.isRequired,
        panorama: PropTypes.string.isRequired

    }

    render () {

        const {
            avatar,
            name
        } = this.props;

        return (

            <section className = { Styles.home } id = 'home' >
                <img src = { avatar } className = { Styles.profil }/>
                <div className={Styles.blockText}>
                    <h1>Hi, I am <span>{ name }</span> </h1>
                    <h2>I am a frontend developer. Feel free to contact me if you want to make me an offer.</h2>
                </div>
            </section>
        );
    }
}
