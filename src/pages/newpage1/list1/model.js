// eslint-disable-next-line @typescript-eslint/camelcase
import { queryList1 } from './service';

const Model = {
  namespace: 'List1',
  state: {
    list: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryList1, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },
  reducers: {
    queryList(state, action) {
      return { ...state, list: action.payload };
    },
  },
};
export default Model;
