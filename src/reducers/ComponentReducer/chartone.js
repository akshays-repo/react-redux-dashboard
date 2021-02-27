import { ChartState } from '../ComponentState/chartone';
import { message } from 'antd';
/**
 * @param state
 * @param action
 */

export const ChartReducer = (state = ChartState, action) => {
  switch (action.type) {
    case 'CHART_ONE':
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
