import { UsersState } from '../ComponentState/users';
import { message } from 'antd';
/**
 * @param state
 * @param action
 */

export const UsersReducer = (state = UsersState, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return {
        error: action.error,
        payload: action.payload.results[0],
        message: action.message,
        changed: false,
      };
    default:
      return state;
  }
};
