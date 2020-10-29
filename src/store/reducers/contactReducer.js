import { CONTACT_LOADING, SEND_MESSAGE, CONTACT_ERROR } from "../actions/types";

const initialState = {
  message: {},
  loading: false,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case CONTACT_LOADING:
      return { ...state, loading: true };

    case SEND_MESSAGE:
      return { ...state, message: payload && payload, loading: false, error: null };

    case CONTACT_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}
