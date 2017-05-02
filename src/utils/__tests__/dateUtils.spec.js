import { expect } from 'chai';
import DateUtils from 'utils/dateUtils';

describe('DateUtils', () => {

  describe('dateStrObj', () => {

    it('converts a dash seperated string to date-like fragments', () => {
      const dateFragments = DateUtils.dateStrObj('07-04-1776');

      expect(dateFragments.month).to.equal('07');
      expect(dateFragments.day).to.equal('04');
      expect(dateFragments.year).to.equal('1776');
    });

  });

});
