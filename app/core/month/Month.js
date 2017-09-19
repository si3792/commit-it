// @flow
import Moment from 'moment';

class Month {

  year: number;
  month: number;

  constructor(year: number, month: number) {
    this.year = year || Moment().year();
    this.month = (month == null) ? Moment().month() : month;
  }

}

export default Month;
