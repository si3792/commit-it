// @flow

const addCommitToDay = (commitID: string, year: number, day: number) => ({
  type: 'ADD_COMMIT_TO_DAY',
  commitID,
  year,
  day
});

const removeCommitFromDay = (commitID: string, year: number, day: number) => ({
  type: 'REMOVE_COMMIT_FROM_DAY',
  commitID,
  year,
  day
});


export default { addCommitToDay, removeCommitFromDay };
