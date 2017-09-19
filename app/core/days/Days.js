// @flow

export default class Days {

  commitCount: {
    [commitID: string]: number
  };
  index: {
    [year: number]: {
      [day: number]: Array<string>
    }
  }

  constructor() {
    this.commitCount = {};
    this.index = {};
  }

  static addCommitToDay(days: Days, commitID: string, year: number, day: number) {
    if (Days.hasCommitForDay(days, commitID, year, day)) return days;

    const newdays = { ...days };
    if (newdays.index[year] == null) newdays.index[year] = {};
    if (newdays.index[year][day] == null) newdays.index[year][day] = [];

    newdays.index[year][day].push(commitID);
    if (newdays.commitCount[commitID] == null) newdays.commitCount[commitID] = 0;
    newdays.commitCount[commitID] += 1;
    return newdays;
  }

  static hasCommitForDay(days: Days, commitID: string, year: number, day: number) {
    if (days.index[year] == null) return false;
    if (days.index[year][day] == null) return false;
    return days.index[year][day].indexOf(commitID) !== -1;
  }

}
