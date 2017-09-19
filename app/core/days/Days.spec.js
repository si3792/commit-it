import Days, { dayReducer, actions } from 'core/days';

describe('Days', () => {
  it('should be initialized correctly', () => {
    const days = new Days();
    expect(days.commitCount).toEqual({});
    expect(days.index).toEqual({});
  });
  describe('daysReducer', () => {
    it('should do nothing on random event', () => {
      const state = new Days();
      const newstate = dayReducer(state, { type: 'RANDOM_EVENT' });
      expect(newstate).toBe(state);
    });
    it('should add commit for a day', () => {
      const state = new Days();
      const newstate = dayReducer(state, actions.addCommitToDay('commit-id', 2017, 10));
      expect(newstate).toEqual({
        commitCount: {
          'commit-id': 1
        },
        index: {
          2017: {
            10: ['commit-id']
          }
        }
      });
    });
    it('should not add duplicate commit for a day', () => {
      const state = new Days();
      const newstate = dayReducer(state, actions.addCommitToDay('commit-id', 2017, 10));
      const newstate2 = dayReducer(newstate, actions.addCommitToDay('commit-id', 2017, 10));
      expect(newstate2).toEqual({
        commitCount: {
          'commit-id': 1
        },
        index: {
          2017: {
            10: ['commit-id']
          }
        }
      });
    });
  });
});
