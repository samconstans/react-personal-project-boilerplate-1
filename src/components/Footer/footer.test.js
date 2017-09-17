import React from 'react';
import dom from 'react-test-renderer';
import Footer from './';
import { options } from '../../containers/App';

const { apirepo, api, linkedin, twitter } = options;


const result = dom.create(<Footer />,
    {
        context: {
            api,
            apirepo,
            linkedin,
            twitter
        }
    }
).toJSON();

test('Footer component', () =>
    {expect(result).toMatchSnapshot()
});

