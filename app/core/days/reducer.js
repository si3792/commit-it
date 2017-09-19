import Days from 'core/days';

const initialState = () => new Days();

const daysReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMIT_TO_DAY':
      return Days.addCommitToDay(state, action.commitID, action.year, action.day);
    default:
      return state;
  }
};

export default daysReducer;
