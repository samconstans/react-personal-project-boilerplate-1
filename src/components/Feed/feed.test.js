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
).toJSON();

describe('Feed component', () => {
    test('Should have 1 section element', () => {
        expect(result).toMatchSnapshot();
    });
});
