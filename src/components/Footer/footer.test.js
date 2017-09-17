import React from 'react';
import { shallow } from 'enzyme';
import Footer from './';

const result = shallow(<Footer />, {
    context: {
        facebook:   'https://www.facebook.com/anastasia.vovk',
        googlePlus: 'https://plus.google.com/u/0/102345458595341567965',
        linkedin:   'https://www.linkedin.com/in/anastasiia-vovk-03159b44/',
        twitter:    'https://twitter.com/NaWtusya'
    }
});

describe('Footer component', () => {
    test('Should have 1 section element', () => {
        expect(result.find('section').length).toBe(1);
    });

    test('Should have 1 div element', () => {
        expect(result.find('div').length).toBe(1);
    });

    test('Should have 4 a element', () => {
        expect(result.find('a').length).toBe(4);
    });
});