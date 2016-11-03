/**
 * Created by sang on 11/3/16.
 */
import { ActionConst } from 'react-native-router-flux';
import initialState from './initialState';

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
