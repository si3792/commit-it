import Month from 'core/month';

const initialState = () => new Month();

const monthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MONTH':
      return new Month(action.year, action.month);
    default:
      return state;
  }
};

export default monthReducer;
