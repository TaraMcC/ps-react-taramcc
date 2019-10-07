import React from 'react';
import {shallow} from 'enzyme';
import MyComponent from '../src/my-component';

const wrapper = shallow(<MyComponent/>);

describe('(Component) MyComponent', () =>{
    it('renders without exploding', () =>{
        expect(wrapper).to.have.length(1);
    });
});