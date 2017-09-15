import React from 'react';
import { shallow } from 'enzyme';
import Footer from './';

describe('Footer component', () => {
    test('Should have 1 section element', () => {
        expect(Footer.find('section').length).toBe(1);
    });

    test('Should have 1 div element', () => {
        expect(Footer.find('div').length).toBe(1);
    });

    test('Should have 4 a element', () => {
        expect(Footer.find('a').length).toBe(4);
    });

});
