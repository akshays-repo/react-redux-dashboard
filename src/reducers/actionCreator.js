import { backend_api } from '../_constants/api';
import { message } from 'antd';
import axios from 'axios';
/**
 * Async action creator for Dashboard. All the action to roledef reducer are dispatch from this.
 * @param action
 */
export const actionCreator = result => {
  return async dispatch => {
    let url = backend_api[result.action_type];
    try {
      let response
    await  axios.get(url).then(res => console.log("response", response = res))

      if (response.status ===200 ) {
          return dispatch({
            type: result.action_type,
            payload: response.data || response.DATA || response,
            error: '',
          });
      } else {
        return dispatch({ type: 'FETCH_ERROR', error: true, message: response.error });
      }
    } catch (err) {
      return dispatch({ type: 'FETCH_ERROR', payload: [], error: true, message: err.message });
    }
  };
};
