import { CardState } from '../ComponentState/card';
import { message } from 'antd';
/**
 * @param state
 * @param action
 */

export const CardReducer = (state = CardState, action) => {
  switch (action.type) {
    case 'FETCH_CARD':
      return {
        error: action.error,
        payload: action.payload,
        message: action.message,
        changed: false,
      };
    default:
      return state;
  }
};
