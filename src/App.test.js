import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  let app;
  let inputWrapper;

  const changeInputValue = (value) => {
    inputWrapper.simulate('change', {target: {value: value}});
  };

  const outputWrapper = () => {
    return app.find('#output');
  };

  const outputValue = () => {
    return outputWrapper().prop('value');
  };

  beforeEach(() => {
    app = shallow(<App/>);
    inputWrapper = app.find('#input');
  });

  describe('bowling score calculator', function () {
    it('should calculate score as zero for all misses', function () {
      changeInputValue('--------------------');
      expect(outputValue()).toEqual(0);
    });
    it('should calculate score as 20 for all ones', function () {
      changeInputValue('11111111111111111111');
      expect(outputValue()).toEqual(20);
    });
    it('should calculate a score for any integer 1-9', function () {
      changeInputValue('12345678912345678912');
      expect(outputValue()).toEqual(93);
    });
    it('should calculate score as 10 for a spare and 19 misses', function () {
      changeInputValue('-/------------------');
      expect(outputValue()).toEqual(10);
    });
    it('should calculate score as 10 for a 5 then spare', function () {
      changeInputValue('5/------------------');
      expect(outputValue()).toEqual(10);
    });
  });
});