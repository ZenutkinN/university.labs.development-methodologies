import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NotesList } from './NotesList';

Enzyme.configure({ adapter: new Adapter() });

describe('Note List:', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NotesList />);
  });

  it('test num. 1 - checking the creation of a note with text', () => {
    const text = 'First note';
    component.find('input').simulate('change', { target: { value: text } });
    component.find('.add').simulate('click');
    expect(component.find('.text').text()).toBe(text);
  });

  it('test num. 2 - сhecking the creation of a note without text', () => {
    component.find('.add').simulate('click');
    expect(component.find('ul').text()).toBe('Please, add note');
  });

  it('test num. 3 - Checking the deletion of a note', () => {
    const text1 = 'First note';
    const text2 = 'Second note';

    component.find('input').simulate('change', { target: { value: text1 } });
    component.find('.add').simulate('click');

    component.find('input').simulate('change', { target: { value: text2 } });
    component.find('.add').simulate('click');

    expect(component.find('li').length).toBe(2);

    component.find('ul').find('button').first().simulate('click');

    expect(component.find('li').length).toBe(1);
  });
});
