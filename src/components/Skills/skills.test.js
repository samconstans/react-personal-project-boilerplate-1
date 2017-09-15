import React from 'react';
import { shallow } from 'enzyme';
import Skills from './';

describe('Footer component', () => {
    test('Should have 1 section element', () => {
        expect(Skills.find('section').length).toBe(1);
    });

    test('Should have 1 div element', () => {
        expect(Skills.find('div').length).toBe(1);
    });

    test('Should have 1 h1 element', () => {
        expect(Skills.find('h1').length).toBe(1);
    });

    test('Should have 8 ul element', () => {
        expect(Skills.find('ul').length).toBe(8);
    });

});