import React from 'react';
import { shallow } from 'enzyme';
import Footer from './';
import { options } from '../../containers/App';

const { apirepo, api, linkedin, twitter } = options;

const result = shallow(<Footer />,
    {
        context: {
            api,
            apirepo,
            linkedin,
            twitter
        }
    }
);

test('Footer component', () => {
    expect(result.find('section').length).toBe(1)
});

