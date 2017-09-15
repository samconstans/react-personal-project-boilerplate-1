import React from 'react';
import { shallow } from 'enzyme';
import Works from './';

describe('Footer component', () => {
    test('Should have 1 section element', () => {
        expect(Works.find('section').length).toBe(1);
    });

    test('Should have 1 h1 element', () => {
        expect(Works.find('h1').length).toBe(1);
    });

    test('Should have 1 ul element', () => {
        expect(Works.find('ul').length).toBe(1);
    });

});