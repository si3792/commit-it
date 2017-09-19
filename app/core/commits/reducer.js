import Commits from 'core/commits';

const initialState = {};

const commitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_COMMIT':
      return Commits.createCommit(state, action.text);
    default:
      return state;
  }
};

export default commitsReducer;
