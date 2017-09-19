import Moment from 'moment';
import Commits, { commitsReducer, actions } from 'core/commits';

describe('Commits', () => {
  it('should be initialized correctly', () => {
    const commits = new Commits();
    expect(commits).toEqual({
      index: {}
    });
  });
  describe('commitsReducer', () => {
    it('should do nothing on random event', () => {
      const state = new Commits();
      const newstate = commitsReducer(state, { type: 'RANDOM_EVENT' });
      expect(newstate).toBe(state);
    });
    it('should create commit', () => {
      const state = new Commits();
      const newstate = commitsReducer(state, actions.createCommit('Commit text'));
      const commitID = Object.keys(newstate.index)[0];
      expect(commitID).toBeDefined();
      const commit = newstate.index[commitID];
      expect(commit).toEqual({
        text: 'Commit text',
        created: {
          year: Moment().year(),
          day: Moment().dayOfYear()
        },
        active: true
      });
    });
  });
});
