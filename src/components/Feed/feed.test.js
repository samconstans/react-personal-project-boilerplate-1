import React from 'react';
import { shallow } from 'enzyme';
import Feed from './';
import { options } from '../../containers/App';

const { apirepo, api, linkedin, twitter } = options;


const result = shallow(<Feed getDataRepo = { new Feed().getDataRepo } />,
    {
        context: {
            api,
            apirepo,
            linkedin,
            twitter
        }
    }
);

describe('Feed component', () => {
    test('Should have 1 section element', () => {
        expect(result.find('section').length).toBe(1);
    });
});
