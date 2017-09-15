import React from 'react';
import { shallow } from 'enzyme';
import Header from './';

describe('Footer component', () => {
    test('Should have 1 section element', () => {
        expect(Header.find('section').length).toBe(1);
    });

    test('Should have 1 div element', () => {
        expect(Header.find('div').length).toBe(1);
    });

    test('Should have 1 img element', () => {
        expect(Header.find('img').length).toBe(1);
    });

    test('Should have 1 ul element', () => {
        expect(Header.find('ul').length).toBe(5);
    });

    test('Should have 5 li element', () => {
        expect(Header.find('li').length).toBe(5);
    });

    test('Should have 5 a element', () => {
        expect(Header.find('a').length).toBe(5);
    });

});