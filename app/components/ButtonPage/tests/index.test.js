import ButtonPage from '../index';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ButtonPage />', () => {
  let wrappedComponent;

  beforeEach(() => {
    wrappedComponent = shallow(<ButtonPage />);
  });

  it('displays a button', () => {
    expect(wrappedComponent.find('input')).to.have.length(1);
  });

  it('says Click me!', () => {
    expect(wrappedComponent.find('input').prop('value')).to.eql('Click me!');
  });

  describe('after pressing the Click me! button', () => {
    beforeEach(() => {
      const button = wrappedComponent.find('input');
      button.simulate('click');
    });

    it('does not show a button', () => {
      expect(wrappedComponent.find('input')).to.have.length(0);
    });

    it('shows a You clicked me!', () => {
      expect(wrappedComponent.contains('You clicked me!')).to.equal(true);
    });
  });
});
