import Moment from 'moment';
import Month, { monthReducer, actions, utils } from 'core/month';

describe('Month', () => {
  it('should be initialized correctly', () => {
    const month = new Month();
    expect(month).toEqual({
      year: Moment().year(),
      month: Moment().month()
    });
  });
  it('should be initialized correctly with parameters', () => {
    const month = new Month(2010, 10);
    expect(month).toEqual({
      year: 2010,
      month: 10
    });
  });
  describe('monthReducer', () => {
    it('should do nothing on random event', () => {
      const state = new Month();
      const newstate = monthReducer(state, { type: 'RANDOM_EVENT' });
      expect(newstate).toEqual(state);
    });
    it('should set the month', () => {
      const state = new Month();
      const newstate = monthReducer(state, actions.setMonth(2015, 1));
      expect(newstate).toEqual({
        year: 2015,
        month: 1
      });
    });
  });
  describe('utils/getMonthByOffset', () => {
    it('should calculate offset correctly (1)', () => {
      const month = new Month(2010, 1);
      expect(utils.getMonthByOffset(month, 1)).toEqual(new Month(2010, 2));
    });
    it('should calculate offset correctly (2)', () => {
      const month = new Month(2010, 1);
      expect(utils.getMonthByOffset(month, 12)).toEqual(new Month(2011, 1));
    });
    it('should calculate offset correctly (3)', () => {
      const month = new Month(2010, 1);
      expect(utils.getMonthByOffset(month, 25)).toEqual(new Month(2012, 2));
    });
    it('should calculate offset correctly (4)', () => {
      const month = new Month(2010, 1);
      expect(utils.getMonthByOffset(month, -25)).toEqual(new Month(2008, 0));
    });
  });
});
