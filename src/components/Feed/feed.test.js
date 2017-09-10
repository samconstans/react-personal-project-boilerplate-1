import React from 'react';
import { shallow } from 'enzyme';
import Feed from './';

const result = shallow(<Feed getDataRepo = { new Feed().getDataRepo } />,
    {
        context: {
            apirepo
        }
    }
);


describe('Feed component', () => {
    test('Should have 1 section element', () => {
        expect(result.find('section').length).toBe(1);
    });
});
