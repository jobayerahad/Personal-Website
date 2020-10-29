import { ABOUT_LOADING, LOAD_ABOUT, ABOUT_ERROR } from "../actions/types";

const initialState = {
  data: {},
  loading: true,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ABOUT_LOADING:
      return { ...state, loading: true };

    case LOAD_ABOUT:
      return { ...state, data: payload ? payload : {}, loading: false, error: null };

    case ABOUT_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}
