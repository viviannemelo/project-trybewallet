import { EMAIL_USER } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_USER:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
