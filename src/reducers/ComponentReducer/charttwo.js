import { ChartTwoState } from '../ComponentState/charttwo';
import { message } from 'antd';
/**
 * @param state
 * @param action
 */

export const ChartTwoReducer = (state = ChartTwoState, action) => {
  switch (action.type) {
    case 'CHART_TWO':
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
