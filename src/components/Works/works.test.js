import React from 'react';
import { shallow } from 'enzyme';
import Works from './';

const result = shallow(<Works repos = { ['one', 'two'] } />);

describe('Works component', () => {
    test('Should have 1 section element', () => {
        expect(result.find('section').length).toBe(1);
    });

    test('Should have 1 h1 element', () => {
        expect(result.find('h1').length).toBe(1);
    });

    test('Should have 1 ul element', () => {
        expect(result.find('ul').length).toBe(1);
    });
});