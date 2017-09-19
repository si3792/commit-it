// @flow
import Moment from 'moment';
import uuid from 'uuid/v4';

export default class Commits {

  index: {
    [id: string]: {
      text: string,
      created: {
        year: number,
        day: number
      },
      active: boolean
    }
  }

  constructor() {
    this.index = {};
  }

  static createCommit(commits: Commits, text: string) {
    const newcommits = { ...commits };
    const id = uuid();
    newcommits.index[id] = {
      text,
      created: {
        year: Moment().year(),
        day: Moment().dayOfYear()
      },
      active: true
    };

    return newcommits;
  }

}
