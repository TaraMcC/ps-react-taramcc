import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from "./PasswordInput";
import {shallow} from 'enzyme';

test('toggles input type when show/hide password clicked', () => {

    const wrapper = shallow (<PasswordInput htmlId="test"
                                            onChange={() => {}}
                                            name={"test"}
                                            value=""
                                            showVisibilityToggle/>
                                            );
    expect(wrapper.find({type: 'password'})).toHaveLength(1);
    expect(wrapper.find({type: 'text'})).toHaveLength(0);


    wrapper.find('a').simulate('click');

    //password input should have a type of text after clicking toggle
    expect(wrapper.find({type: 'password'})).toHaveLength(0);
    expect(wrapper.find({type: 'text'})).toHaveLength(1);

});

test ('hides password quality by default', () =>
    {
        const tree = renderer.create(<PasswordInput htmlId="test"
                                                    onChange={() => {}}
                                                    name={"test"}
                                                    value="skdfhskjhfsdk"/>).toJSON();

        expect(tree).toMatchSnapshot();
    }
);

test('shows password quality when enabled and a password is entered', () =>{

    const tree = renderer.create(<PasswordInput htmlId="test"
                                                onChange={() => {}}
                                                name={"test"}
                                                value="skdfhskjhfsdk"
                                                showQuality/>).toJSON();

    expect(tree).toMatchSnapshot();
});

test('hides password quality when enabled and no password is entered', () =>{

    const tree = renderer.create(<PasswordInput htmlId="test"
                                                onChange={() => {}}
                                                name={"test"}
                                                value=""
                                                showQuality/>).toJSON();

    expect(tree).toMatchSnapshot();
});