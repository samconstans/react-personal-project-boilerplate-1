import React from 'react';
import { shallow } from 'enzyme';
import Home from './';
import Feed from '../../components/Feed';
import { options } from '../../containers/App';

const { firstName,lastName, avatar } = options;

const result = shallow(<Home getDataRepo = {new Feed().getDataRepo} />,
    {
         context: {
             firstName,
             lastName,
             avatar
         }
    }
);

describe('Home component', () => {
   test('Should have section elements', () => {
       expect(result.find('section').length).toBe(1);
   });

   test('Should have 1 img element', () => {
       expect(result.find('img').length).toBe(1);
   });

   test('Should have 1 div element', () => {
      expect(result.find('div').length).toBe(1);
   });

});