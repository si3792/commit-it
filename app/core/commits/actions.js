// @flow

const createCommit = (text: string) => ({
  type: 'CREATE_COMMIT',
  text
});


export default { createCommit };
