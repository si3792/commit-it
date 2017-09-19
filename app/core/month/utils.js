// @flow
import Month from 'core/month';

const getMonthByOffset: Month = (month: Month, offset: number) => {
  let newmonth = month.month + offset;
  let newyear = month.year;

  while (newmonth < 0 || newmonth > 11) {
    if (newmonth > 11) {
      newyear += 1;
      newmonth -= 12;
    } else if (newmonth < 0) {
      newyear -= 1;
      newmonth += 12;
    }
  }

  return new Month(newyear, newmonth);
};

export default { getMonthByOffset };
